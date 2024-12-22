import psycopg2
from .. config.config import Config


def connect_to_db():
    try:
        connection = psycopg2.connect(
            host=Config.HOST,
            database=Config.DATABASE,
            user=Config.USER,
            password=Config.PASSWORD
        )
        return connection
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None