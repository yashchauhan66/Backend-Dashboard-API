# Backend Dashboard API

A modular backend application built for the Backend Developer Intern Assignment. Provides APIs for Dashboard, Analytics, Leads, Sales, Content, and Settings modules with authentication, database integration, and Swagger documentation.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Swagger (OpenAPI) Documentation
- ES Modules

## Project Structure

src/
 ├── config/       # DB & Swagger configuration
 ├── middleware/   # Auth middleware
 ├── modules/      # Auth, Dashboard, Analytics, Leads, Sales, Content, Settings
 ├── app.js        # Express app setup
 └── server.js     # Server start
.env.example       # Environment variable example


## Features

- User Signup & Login with JWT
- Protected routes using middleware
- CRUD APIs for all modules:
  - Dashboard
  - Analytics
  - Leads
  - Sales
  - Content
  - Settings
- Swagger API documentation


## Environment Variables

Create a `.env` file using `.env.example`:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## Installation

```bash
npm install


---

##  Run Project


npm start

Server will run at:
http://localhost:5000


---

##  API Documentation (Swagger)

Swagger UI avilable at:

http://localhost:5000/api-docs



---

##  API Testing

 Postman 

Authentication Flow

1. Signup → Create a new user
2. Login → Receive JWT token
3. Use token in headers for protected routes:

Authorization: Bearer <token>

4. Access any protected API
---

##  Authentication Flow

**Purpose:** JWT workflow explain karna.  
**Example:**


---

👨‍💻 Author / Contact

Yash Chauhan – Backend Developer Intern Candidate

---

Summary

1. This backend project includes:

2. Modular architecture

3. JWT-based authentication

4. CRUD APIs for multiple modules

5. Swagger API documentation

6. Ready for testing via Postman

7. Fully environment-variable configurable


---



