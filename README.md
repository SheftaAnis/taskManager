MERN + MySQL Task Manager

A full-stack task management web application with authentication, task CRUD, status tracking, and a modern UI.

---

##  Live Demo

- 🔗 Frontend: _[Add your Vercel link here]_
- 🔗 Backend: _[Add your Render / Localhost link here]_

---

## ⚙️ Features

-  **User Authentication** – Signup, Login (JWT-based)
-  **Task CRUD** – Add, Edit, Delete, and Update Task Status
-  **Status Flow** – To Do → In Progress → Done
-  **Modern UI** – Tailwind CSS for responsive design
-  **Fully Integrated** – React + Node + Sequelize + MySQL

---

## 🛠 Tech Stack

| Tech        | Usage                    |
|-------------|---------------------------|
| React.js    | Frontend                  |
| TailwindCSS | UI Styling                |
| Axios       | HTTP Requests             |
| Node.js     | Backend Runtime           |
| Express.js  | Backend Framework         |
| MySQL       | Database                  |
| Sequelize   | ORM                       |
| Vercel      | Frontend Hosting          |
| Render      | Backend Hosting (optional)|

---

## Installation

### 1. Clone the Repo

git clone https://github.com/SheftaAnis/taskManager.git
cd taskManager


### 2. Setup Backend
cd backend
npm install

create a .env file
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_manager
JWT_SECRET=yourJWTSecret


### 3. Setup frontend
cd ../frontend
npm install
npm run dev


