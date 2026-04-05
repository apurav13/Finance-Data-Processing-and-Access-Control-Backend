🚀 💰 Finance Dashboard Backend API
A robust backend system for managing financial records with secure authentication, role-based access control (RBAC), and analytics APIs — built using Node.js, Express, and MongoDB.

🌟 Overview
This project simulates a real-world finance dashboard backend, where users interact with financial data based on their roles. It demonstrates core backend engineering concepts including:
Authentication & Authorization
Data modeling & persistence
RESTful API design
Role-based access control
Aggregation & analytics

🔐 Role-Based Access Control
Role	Permissions
Admin	Full access (manage users + create/update/delete records + view all data)
Analyst	View own records + access analytics
Viewer	View dashboard only

⚙️ Tech Stack
Backend: Node.js + Express
Database: MongoDB (Mongoose ODM)
Authentication: JWT (JSON Web Tokens)
API Testing: Postman / Thunder Client

🏗️ Project Architecture
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


🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/your-username/finance-backend.git
cd finance-backend

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Run the Server
npm start

🔑 API Endpoints
🔐 Authentication
Method	Endpoint
POST	/api/auth/register
POST	/api/auth/login

👥 User Management (Admin Only)
Method	Endpoint
GET	/api/users
PUT	/api/users/:id/role
PUT	/api/users/:id/status

💰 Financial Records
Method	Endpoint
GET	/api/records
POST	/api/records
PUT	/api/records/:id
DELETE	/api/records/:id

📊 Dashboard
Method	Endpoint
GET	/api/dashboard

🔍 Filtering & Pagination
GET /api/records?page=1
GET /api/records?type=income
GET /api/records?category=food
GET /api/records?startDate=2024-01-01&endDate=2026-12-31

🔐 Authentication Header
Authorization: Bearer YOUR_TOKEN

📊 Key Features
✅ Secure JWT Authentication
✅ Role-Based Access Control (RBAC)
✅ Financial Records CRUD
✅ Data Filtering (date, type, category)
✅ Pagination Support
✅ Dashboard Analytics (income, expense, balance)
✅ User Management (Admin only)
✅ MongoDB Data Persistence

🧠 Technical Decisions
Express.js chosen for modular routing and simplicity
MongoDB used for flexible schema and easy aggregation
JWT for stateless authentication
Middleware-based RBAC for clean access control
Pagination & filtering for performance optimization

👨‍💻 Author: Apurav Swami
