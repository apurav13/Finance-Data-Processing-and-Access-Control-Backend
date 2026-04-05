# 🚀 💰 Finance Dashboard Backend API

A robust backend system for managing financial records with secure authentication, role-based access control (RBAC), and analytics APIs — built using **Node.js, Express, and MongoDB**.

---

## 🌟 Overview

This project simulates a real-world **Finance Dashboard Backend**, where users interact with financial data based on their roles.

It demonstrates core backend engineering concepts:

* 🔐 Authentication & Authorization
* 🗄️ Data Modeling & Persistence
* 🌐 RESTful API Design
* 🛡️ Role-Based Access Control (RBAC)
* 📊 Aggregation & Analytics

---

## 🔐 Role-Based Access Control

| Role        | Permissions                                             |
| ----------- | ------------------------------------------------------- |
| **Admin**   | Full access (manage users, CRUD records, view all data) |
| **Analyst** | View own records + access analytics                     |
| **Viewer**  | Read-only dashboard access                              |

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JWT (JSON Web Tokens)
* **API Testing:** Postman / Thunder Client

---

## 🏗️ Project Structure

```
finance-backend/
│
├── config/          # Database configuration
├── controllers/     # Business logic
├── models/          # Database schemas
├── routes/          # API endpoints
├── middleware/      # Auth & RBAC logic
├── app.js           # Express app setup
├── server.js        # Entry point
└── .env             # Environment variables
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

```bash
npm start
```

---

## 🔑 API Endpoints

### 🔐 Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |

---

### 👥 User Management (Admin Only)

| Method | Endpoint                |
| ------ | ----------------------- |
| GET    | `/api/users`            |
| PUT    | `/api/users/:id/role`   |
| PUT    | `/api/users/:id/status` |

---

### 💰 Financial Records

| Method | Endpoint           |
| ------ | ------------------ |
| GET    | `/api/records`     |
| POST   | `/api/records`     |
| PUT    | `/api/records/:id` |
| DELETE | `/api/records/:id` |

---

### 📊 Dashboard

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/dashboard` |

---

## 🔍 Filtering & Pagination

Examples:

```
GET /api/records?page=1
GET /api/records?type=income
GET /api/records?category=food
GET /api/records?startDate=2024-01-01&endDate=2026-12-31
```

---

## 🔐 Authentication Header

```
Authorization: Bearer YOUR_TOKEN
```

---

## 📊 Key Features

* ✅ Secure JWT Authentication
* ✅ Role-Based Access Control (RBAC)
* ✅ Financial Records CRUD
* ✅ Data Filtering (date, type, category)
* ✅ Pagination Support
* ✅ Dashboard Analytics (income, expense, balance)
* ✅ User Management (Admin only)
* ✅ MongoDB Data Persistence

---

## 🧠 Technical Decisions

* **Express.js** → Modular & scalable routing
* **MongoDB** → Flexible schema & aggregation support
* **JWT** → Stateless authentication
* **Middleware-based RBAC** → Clean access control
* **Pagination & Filtering** → Performance optimization

---

## 👨‍💻 Author

**Apurav Swami**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
