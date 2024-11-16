import io

from PIL import Image
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from rembg import remove

app = FastAPI()


class clientInfo(BaseModel):
    name: str

@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)

    response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"  # Next.js 클라이언트 도메인
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"

    if request.method == "OPTIONS":
        response.status_code = 200

    return response

@app.get("/")
async def test():
    return {"message": "darling"}

@app.get("/hello")
def hello():
    return {"data": "hello world"}

@app.post("/main")
async def main(info: clientInfo):
    name = info.name
    return f"hello, welcome back {name}!"

# def remove_background(input_image: bytes) -> bytes:
#     image = Image.open(io.BytesIO(input_image))
#     output_image = remove(image)
#     return output_image


@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    file_content = await file.read()
    processed_image = remove(file_content)
    image_stream = io.BytesIO(processed_image)

    return StreamingResponse(image_stream, media_type="image/png")
