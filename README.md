MERN + MySQL Task Manager

A full-stack task management web application with authentication, task CRUD, status tracking, and a modern UI.

---

##  Live Demo

- 🔗 Frontend: https://task-manager-lr5p.vercel.app/
- 🔗 Backend: https://taskmanager-cvk6.onrender.com

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
| Postgres    | Database                  |
| Sequelize   | ORM                       |
| Vercel      | Frontend Hosting          |
| Render      | Backend Hosting           |

---

## Installation

### 1. Clone the Repo

git clone https://github.com/SheftaAnis/taskManager.git
cd taskManager


### 2. Setup backend
cd backend
npm install

#creat .env file in backend
PORT=5432
DB_HOST=your-neon-db-host-url
DB_USER=your-neon-db-username
DB_PASSWORD=yourpassword
DB_NAME=your_neondb_username
JWT_SECRET=yourJWTSecret



### 3. Setup frontend
cd ../frontend
npm install
npm run dev

#create .env file in frontend
VITE_BASE_URL=https://your-render-backend-url.onrender.com

### Database:
- PostgreSQL (Neon)

### Hosting:
- Frontend: Vercel  
- Backend: Render  
- DB: Neon (Free-tier PostgreSQL)

### Screenshots





![login](https://github.com/user-attachments/assets/916f3724-9c6f-43be-8007-254c68cc7353)
![dashbord](https://github.com/user-attachments/assets/1a5c9139-5c42-4c64-8598-308c35bb50a7)
![signup](https://github.com/user-attachments/assets/b4e16184-8a39-4d9f-bc36-ae0452cb4401)
