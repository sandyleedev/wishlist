# Wishlist Backend (FastAPI)

This is the backend server for the Wishlist project, built with **FastAPI**.

## 🚀 How to Run

1. Create and activate virtual environment (if not already):
   ```bash
   python -m venv venv
   source venv/bin/activate   # macOS/Linux
   venv\Scripts\activate      # Windows

2. Install dependencies:
   ```bash
    pip install -r requirements.txt
   
3. Run the server:
    ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   
4. Open in browser:
    ```bash
   http://127.0.0.1:8000