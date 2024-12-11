from fastapi import APIRouter
from fastapi import UploadFile, File
from fastapi.responses import StreamingResponse
from rembg import remove
from io import BytesIO

router = APIRouter()


@router.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    file_content = await file.read()
    processed_image = remove(file_content)
    image_stream = BytesIO(processed_image)

    return StreamingResponse(image_stream, media_type="image/png")
