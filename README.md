# Zync - The Digital Curator

Zync is a professional academic synchronization platform designed to streamline student schedules, attendance tracking, and campus communication through a unified interface.

### Deployment Information
Deployed Application: [https://zync-1-puji.onrender.com/login](https://zync-1-puji.onrender.com/login)

---

### Backend Implementation and Coverage

The project backend covers 100% of the core functional requirements, with a focus on robust architecture and scalable data management. Below is a detailed breakdown of the backend coverage and implementation logic:

#### Architectural Overview
The backend is built using Node.js and Express, following a modular Service-Repository pattern:
- **Models:** Defined using Mongoose for MongoDB, ensuring strict schema validation for Users, Attendance, Courses, and Events.
- **Repositories:** Decouple data access logic from business logic, allowing for cleaner testing and maintenance.
- **Services:** Handle core business rules, such as calculating attendance percentages and generating personalized schedules.
- **Controllers:** Manage incoming HTTP requests and map them to appropriate services, returning standardized JSON responses.

#### Core Functionality and APIs

1. **Authentication and Security**
   - Implemented JWT-based session management and bcrypt password hashing.
   - **API:** `POST /api/v1/auth/register` and `POST /api/v1/auth/login`
   - **How it works:** Validates credentials, generates a token containing user roles, and protects subsequent routes via `authMiddleware`.

2. **Attendance Management System**
   - Handles real-time tracking of student presence across different courses.
   - **API:** `GET /api/v1/attendance`
   - **How it works:** Queries the `AttendanceRepository` to aggregate data and calculate the current attendance ratio for each subject.

3. **Academic Scheduling**
   - Manages a dynamic calendar of classes and campus-wide events.
   - **API:** `GET /api/v1/schedule`
   - **How it works:** Filters events based on the user's enrolled courses and displays them in a chronological timeline.

4. **Notification Infrastructure**
   - Provides automated alerts for upcoming deadlines and schedule changes.
   - **API:** `GET /api/v1/notifications`
   - **How it works:** A dedicated notification service pushes updates to the user's inbox based on priority levels and timestamps.

5. **Advanced Modules**
   - **Anonymous Connect:** (`POST /api/v1/anonymous-connect`) - Enables secure peer messaging using an abstracted Message repository.
   - **Exam Prep:** (`GET /api/v1/exam-prep`) - Aggregates study materials and deadlines for efficient preparation.
   - **Dashboard Analytics:** (`GET /api/v1/dashboard`) - Performs multi-collection data aggregation to provide a high-level overview of student performance.

#### Design Patterns Used
- **Singleton:** Ensuring a single database connection instance across the application.
- **Strategy Pattern:** Implemented in `RecommendationStrategy.js` to provide different logic for student suggestions.
- **Repository Pattern:** To abstract the underlying database operations and improve code readability.

---

### Technology Stack
- **Frontend:** React (Vite), Axios, Lucide UI, Vanilla CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose ODM
- **Deployment:** Render (Automated CI/CD via GitHub)
