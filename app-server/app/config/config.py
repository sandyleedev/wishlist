from dotenv import load_dotenv
import os

# .env 파일 로드
load_dotenv()

class Config:
    HOST = os.getenv("DB_HOST")
    DATABASE = os.getenv("DB_NAME")
    USER = os.getenv("DB_USER")
    PASSWORD = os.getenv("DB_PASSWORD")