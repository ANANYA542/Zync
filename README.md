# Zync - The Digital Curator

Zync is a streamlined academic synchronization platform designed to manage student schedules, attendance, and campus notifications in one cohesive interface.

### 🚀 Live Demo
**Deployed Link:** [https://zync-1-puji.onrender.com/login](https://zync-1-puji.onrender.com/login)

---

### 🛠 Core Features
- **Smart Scheduling:** Keep track of classes and academic events.
- **Attendance Management:** Log and monitor attendance records.
- **Anonymous Connect:** Secure peer-to-peer messaging.
- **Exam Preparation:** Specialized tools for test readiness.
- **Insightful Dashboard:** High-level analytics of your academic progress.

---

### 🌐 API Reference

All API requests are prefixed with `/api/v1`.

| Module | Endpoint | Description |
| :--- | :--- | :--- |
| **Authentication** | `POST /auth/login` | User login and JWT generation |
| **Authentication** | `POST /auth/register` | New user account creation |
| **Attendance** | `GET /attendance` | Fetch attendance records |
| **Schedule** | `GET /schedule` | Retrieve upcoming academic events |
| **Notifications** | `GET /notifications` | List user-specific alerts |
| **Dashboard** | `GET /dashboard` | Get student progress analytics |
| **Social** | `POST /anonymous-connect` | Send anonymous peer messages |

---

### 🏗 Tech Stack
- **Frontend:** React (Vite), Axios, Lucide Icons, Vanilla CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Deployment:** Render (Static Site & Web Service)
