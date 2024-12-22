import random
import string
from fastapi import APIRouter
from typing import List
from PIL import Image
from fastapi import UploadFile, File, Form, Path
from io import BytesIO
from pydantic import BaseModel
from rembg import remove
from psycopg2.extras import RealDictCursor

from ..utils.db_utils import connect_to_db
from ..utils.s3_utils import upload_to_s3

router = APIRouter()


class Item(BaseModel):
    id: int
    wishlistId: str
    title: str
    url: str
    img: str


class ApiResponse(BaseModel):
    success: bool
    message: str
    data: dict


@router.post("/render-list")
async def upload_images(
        titles: List[str] = Form(...),
        urls: List[str] = Form(...),
        images: List[UploadFile] = File(...),
):

    title_list, url_list, img_list = [], [], []

    for t, u in zip(titles, urls):
        title_list.append(t)
        url_list.append(u)

    # 숫자와 알파벳을 포함한 10자리 난수 생성
    wishlist_id = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
    print(wishlist_id)

    connection = connect_to_db()
    cursor = connection.cursor()

    # wishlist 테이블에 데이터 삽입
    cursor.execute("INSERT INTO wishlist (wishlist_id, wishlist_title) VALUES (%s, %s)",
                   (wishlist_id, 'Wishes ~'))

    # wishlist_items 테이블에 데이터 삽입
    cursor.execute("""
        INSERT INTO wishlist_items (wishlist_id, title, url, img)
        VALUES (%s, %s, %s, %s), (%s, %s, %s, %s)
    """, (wishlist_id, 'pillow', 'https://29cm.co.kr', '1.webp',
          wishlist_id, 'candle', 'https://29cm.co.kr', '1.webp'))

    # 커밋 및 연결 종료
    connection.commit()
    cursor.close()
    connection.close()

    # 이미지 처리 및 S3 업로드
    for index, img in enumerate(images):
        img_data = await img.read()
        image_stream = BytesIO(img_data)

        try:
            img = Image.open(image_stream)

            # 이미지의 배경 제거
            processed_image = remove(img_data)  # remove 함수로 배경 제거
            image_stream = BytesIO(processed_image)

            # S3에 이미지 업로드
            upload_to_s3(index + 1, image_stream, wishlist_id)

        except Exception as e:
            return {"error": f"Error processing image {index + 1}: {str(e)}"}

    return {"message": "Images processed and uploaded successfully."}


@router.get("/wishlist/{wishlist_id}", response_model=ApiResponse)
async def get_wishlist(wishlist_id: str = Path(..., title="Wishlist ID")):
    connection = connect_to_db()
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM wishlist_items WHERE wishlist_id = %s", (wishlist_id,))

    rows = cursor.fetchall()

    item_list = []
    for row in rows:
        item = Item(
            id=row['item_id'],
            wishlistId=row['wishlist_id'],
            title=row['title'],
            url=row['url'],
            img=row['img']
        )
        item_list.append(item)

    print(item_list)

    cursor.close()
    connection.close()

    return {
        "success": True,
        "message": "" if item_list else "No items found for this wishlist.",
        "data": {"itemList": item_list},
    }
