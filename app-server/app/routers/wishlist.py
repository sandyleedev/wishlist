from fastapi import APIRouter
from typing import List
from PIL import Image
from fastapi import UploadFile, File, Form
from fastapi.responses import HTMLResponse
from io import BytesIO
from ..utils.helpers import create_collage_html

router = APIRouter()


@router.post("/render-list")
async def upload_images(
        titles: List[str] = Form(...),
        urls: List[str] = Form(...),
        images: List[UploadFile] = File(...),
):
    print("render-list api start!")

    title_list, url_list, img_list = [], [], []

    for t, u in zip(titles, urls):
        title_list.append(t)
        url_list.append(u)

    # Process image files
    for img in images:
        img_data = await img.read()
        image_stream = BytesIO(img_data)

        try:
            img = Image.open(image_stream)
            img_list.append(img)

        except Exception as e:
            return {"error": f"Error processing image {img.filename}: {str(e)}"}

    # Create HTML collage
    html_content = create_collage_html(title_list, url_list, img_list)

    # Return HTML response
    return HTMLResponse(content=html_content)
