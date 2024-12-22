import boto3
from PIL import Image
from io import BytesIO


s3_client = boto3.client(
    's3',
    aws_access_key_id='AKIA47CRUOJQBYCXL7N6',
    aws_secret_access_key='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',
    region_name='ap-northeast-2'
)

BUCKET_NAME = "buttercookiebucket"


def convert_to_webp(image_stream: BytesIO) -> BytesIO:
    img = Image.open(image_stream)
    webp_stream = BytesIO()
    img.save(webp_stream, format="WebP")
    webp_stream.seek(0)
    return webp_stream


def upload_to_s3(index: str, image_stream: BytesIO, wishlist_id: str):
    # WebP 형식으로 변환
    webp_image_stream = convert_to_webp(image_stream)

    # S3에 업로드 (WebP 형식으로 업로드)
    s3_key = f"wishlist/{wishlist_id}/{index}.webp"
    s3_client.upload_fileobj(webp_image_stream, BUCKET_NAME, s3_key, ExtraArgs={'ContentType': 'image/webp'})
    print(f"File {index} uploaded to {BUCKET_NAME}/{s3_key}")