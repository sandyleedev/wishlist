from dotenv import load_dotenv
import os

# .env 파일 로드
load_dotenv()

class Config:
    # Database
    HOST = os.getenv("DB_HOST")
    DATABASE = os.getenv("DB_NAME")
    USER = os.getenv("DB_USER")
    PASSWORD = os.getenv("DB_PASSWORD")

    # AWS S3
    AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
    AWS_REGION = os.getenv("AWS_REGION", "eu-west-2")
    S3_BUCKET = os.getenv("S3_BUCKET")
