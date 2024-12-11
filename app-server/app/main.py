from fastapi import FastAPI

from .routers.background import router as background_router
from .routers.wishlist import router as wishlist_router

app = FastAPI()

app.include_router(background_router)
app.include_router(wishlist_router)

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
    return {"message": "Welcome to FastAPI"}