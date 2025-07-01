# 📝 To‑Do App (Flask & Python)

A simple web-based To‑Do application built with **Python**, **Flask**, **SQLAlchemy**, and **SQLite**. The app supports managing tasks with **Create**, **Read**, **Update**, and **Delete** capabilities via a RESTful API.

---

## 📂 Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation & Setup](#installation--setup)  
  - [Clone Repository](#clone-repository)  
  - [Backend Setup](#backend-setup)  
- [Database & Seeding](#database--seeding)  
- [Running the App](#running-the-app)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)

---

## Features

- Task management: add, view, update, delete  
- Data stored in **SQLite** via **SQLAlchemy ORM**  
- REST API built with **Flask**  
- Easy-to-use: CLI-based deployment and testing

---

## Tech Stack

- Backend: Python 3.13, Flask, Flask SQLAlchemy  
- Database: SQLite  
- Virtual Environment: `venv`

---

## Prerequisites

Ensure you have:

- [Python 3.13+](https://www.python.org/downloads/)  
- `git` (for cloning)  
- `pip` (Python package manager)

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/thecallmeBilalAshiq/To-Do_App_Python-Flask.git
cd To-Do_App_Python-Flask


python3 -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows




pip install -r requirements.txt



flask db upgrade
python seed.py


export FLASK_APP=application.py  # macOS/Linux
set FLASK_APP=application.py     # Windows

flask run


| Method | Endpoint                | Description                           |
| ------ | ----------------------- | ------------------------------------- |
| POST   | `/api/v1/auth/sign-in`  | Authenticate user & receive JWT       |
| GET    | `/api/v1/users`         | List all users                        |
| POST   | `/api/v1/users`         | Create a new user                     |
| GET    | `/api/v1/users/{id}`    | Get user by ID                        |
| DELETE | `/api/v1/users/account` | Delete the authenticated user account |
| GET    | `/api/v1/tags`          | List all task tags                    |
| POST   | `/api/v1/tags`          | Create a new tag                      |
| POST   | `/api/v1/tasks`         | Create a new task                     |
| GET    | `/api/v1/tasks/user`    | List tasks for the authenticated user |
| PUT    | `/api/v1/tasks/{id}`    | Update an existing task               |
| DELETE | `/api/v1/tasks/{id}`    | Delete a task                         |





📁 To-Do_App_Python-Flask/
├─ application.py         # Entry point for Flask app
├─ requirements.txt       # Python dependencies
├─ seed.py                # Pre-populate database with sample data
├─ flaskr/                # App package
│  ├─ models.py           # SQLAlchemy models for Task, Tag, User
│  ├─ routes/             # API implementations (auth, tasks, tags, users)
│  └─ __init__.py         # Initializes Flask app, DB, migrations
└─ migrations/            # Alembic DB migrations folder


Contributing
Fork the repository

Create a new feature branch

Make your changes

Run flake8 or black if needed

Submit a pull request with clear description

License
MIT License © [Your Name]. Feel free to modify and use this project as you like.


---

### 🧭 How to Use This

- Add this **README.md** at the root of your project.
- Adjust paths, filenames, or instructions to match your code structure (e.g., if your main file isn’t named `application.py`).
- Optional: add screenshots or API documentation (like Postman collections).
- It will provide clear guidance for anyone cloning your repo and running it locally.

Let me know if you'd like help integrating a frontend or Docker support!
::contentReference[oaicite:0]{index=0}
