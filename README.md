# MERN Backend API

A modern Express.js backend API built with MongoDB, Mongoose, JWT Authentication, and RESTful architecture.

## Features

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* MongoDB Database
* Express.js REST API
* Error Handling
* Environment Variables
* Scalable Folder Structure

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors

## Project Structure

```txt
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── admin.middleware.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/mern_db

JWT_SECRET=your_secret_key
```

## Run Development Server

```bash
npm run dev
```

## Run Production Server

```bash
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register User    |
| POST   | /api/auth/login    | Login User       |
| GET    | /api/auth/me       | Get Current User |
| POST   | /api/auth/logout   | Logout User      |

### Users

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/users     | Get All Users   |
| GET    | /api/users/:id | Get Single User |
| POST   | /api/users     | Create User     |
| PUT    | /api/users/:id | Update User     |
| DELETE | /api/users/:id | Delete User     |

## Authorization

Add JWT token to request headers:

```txt
Authorization: Bearer YOUR_JWT_TOKEN
```

## Available Scripts

```bash
npm run dev
npm start
```

## Author

Full Stack Web Developer & AI Engineer
