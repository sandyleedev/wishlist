# 🌨️ Wishlist Collage Web App

A simple yet creative web application that allows users to create a **collage-style wishlist** by uploading item images and purchase links.  
The backend automatically removes image backgrounds and generates a clean collage where each item image links to its purchase page.

> Built with **FastAPI (Python)** and **Next.js**, fully deployed using **AWS EC2, RDS (PostgreSQL), S3, CloudFront**, and **Vercel**.

---

## 🖥️ System Overview

- **Frontend**: Next.js (React)  
- **Backend**: FastAPI (Python)  
- **Database**: AWS RDS (PostgreSQL)  
- **Storage**: AWS S3 + CloudFront (for image hosting)  
- **Deployment**: Backend on AWS EC2, Frontend on Vercel  
- **Libraries**: `rembg` for background removal  

---

## 💥 Features

- 📓 Upload item image, name, and purchase link  
- 🧤 Automatically remove background using Python `rembg`  
- ☁️ Store processed images on **AWS S3**, served via **CloudFront**  
- 📁 Save metadata (item info + CloudFront URL) in **AWS PostgreSQL (RDS)**  
- 🔗 Generate a unique `wishlist_id` using  
  ```python
  wishlist_id = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
  ```
  → Each wishlist can be accessed directly through its unique URL  
- 🌳 Responsive design for desktop and mobile  
- 💗 Clickable collage view — each image links to its purchase page  

---

## ⚙️ System Architecture

<img width="1081" height="601" alt="wishlist_architecture" src="https://github.com/user-attachments/assets/17e2cb3a-07e4-4fe6-9b58-92a3cede9ca2" />

The system connects a **Next.js frontend (Vercel)** with a **FastAPI backend (EC2, Docker)** and integrates **AWS RDS, S3, and CloudFront** for storage and delivery.

---
## 💻 Implementation Details

### 🐍 Backend Development
- Implemented **FastAPI server** for image upload, background removal, and metadata management  
- Integrated **`rembg`** for automatic background removal and optimized memory usage on EC2  
- Designed and connected **AWS RDS (PostgreSQL)** schema for wishlist items  
- Implemented **S3 upload logic** and CloudFront-based image retrieval  

### 🌈 Frontend Development
- Built responsive wishlist UI with **Next.js**  
- Designed **collage layout** with clickable image tiles  
- Configured API communication and error handling  

### 🐳 Cloud & DevOps
- Deployed backend using **Docker** on **AWS EC2**  
- Set up **CORS** and **proxy** configuration between frontend and backend  
- Configured **CloudFront** and **S3 bucket policies** for secure static delivery  
- Deployed frontend on **Vercel** for global access  

---

## 🛠️ Troubleshooting Highlights

- 💨 **Out-of-Memory (OOM)** errors on EC2 → optimized `rembg` usage and upgraded memory to 2GB  
- 🔒 **Mixed-content issue (HTTPS ↔ HTTP)** → resolved via Next.js proxy rewrite  
- ⚙️ **Connection pooling** for RDS → improved stability for concurrent API requests  

---

## 📸 Screenshots

<img width="1436" height="676" alt="wishlist_media3" src="https://github.com/user-attachments/assets/30099a14-4944-4ade-b4b2-3a61d3824a7a" />
<br/>
<img width="1419" height="674" alt="wishlist_media5" src="https://github.com/user-attachments/assets/b2b8fcb9-7e5b-43d8-8d45-244c1cc80984" />

---

## 🧳 Project Info

- **Date**: November 2024  
- **Type**: Personal Project  
- **Stack**: Python, FastAPI, AWS, EC2, S3, CloudFront, PostgreSQL, Docker, Next.js  

---

## 💌 Contact

**Seungji (Sandy) Lee**  
📧 [Email](mailto:sandyleedev@gmail.com) | 🌐 [Portfolio](https://sandylee.work) | 🔗 [LinkedIn](https://www.linkedin.com/in/seungjilee/)

