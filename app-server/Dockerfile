# Python 3.13 slim 이미지 사용
FROM python:3.13-slim

# 컨테이너 작업 디렉토리
WORKDIR /code

# curl 설치 (slim 이미지에는 없음)
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# rembg 모델 미리 다운로드 (u2net.onnx)
RUN mkdir -p /root/.u2net && \
    curl -L -o /root/.u2net/u2net.onnx \
    https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net.onnx

# requirements.txt 복사 후 의존성 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 앱 코드 복사
COPY . .

# uvicorn 실행 (FastAPI 서버 시작)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]