from fastapi import FastAPI
from .routers.wishlist import router as wishlist_router

app = FastAPI()

app.include_router(wishlist_router)


@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)

    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Credentials"] = "true"

    if request.method == "OPTIONS":
        response.status_code = 200

    return response


@app.get("/")
async def test():
    return {"message": "Welcome to FastAPI"}