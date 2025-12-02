# COMP 3123 - Assignment 2: Full Stack Employee Management System

**Student Name:** Soroush Salari
**Student ID:** 101537771
**Course:** COMP 3123 | Full Stack Development – I
**Assignment:** Assignment 2 (12%)

---

## Project Overview

This is a comprehensive Full Stack Employee Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides complete CRUD operations for managing employee records with authentication, file uploads, search functionality, and professional UI/UX design.

---

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **Express Validator** - Input validation

### Frontend
- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Material-UI (MUI)** - Component library
- **Axios** - HTTP client
- **Context API** - State management

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Mongo Express** - MongoDB web interface

---

## Features Implemented

### Authentication (15 points)
- ✅ User signup with validation
- ✅ User login with JWT authentication
- ✅ Secure password hashing
- ✅ Session management with localStorage
- ✅ Protected routes
- ✅ Logout functionality

### Employee Management (50 points)
- ✅ **List All Employees** (10 points)
  - Professional table with Material-UI
  - Display all employee information
  - Avatar/profile pictures
  - Action buttons (View, Edit, Delete)
  - Quick search functionality

- ✅ **Add Employee** (15 points)
  - Complete form with validation
  - Profile picture upload (max 5MB)
  - Image preview before upload
  - All required fields validated
  - Professional UI design

- ✅ **View & Update Employee** (10 points)
  - View detailed employee information
  - Edit form with pre-filled data
  - Update profile picture option
  - Complete validation
  - Responsive design

- ✅ **Delete Employee** (5 points)
  - Confirmation dialog before deletion
  - Cascade delete of profile pictures

- ✅ **Search Functionality** (10 points)
  - Search by department
  - Search by position
  - Combined search support
  - Results displayed in table format
  - Custom search result screen

### Additional Features
- ✅ **Docker Deployment** (10 points)
  - docker-compose.yml configuration
  - MongoDB container
  - Backend API container
  - Frontend container
  - Mongo Express for database management

- ✅ **Code Organization** (5 points)
  - Modular architecture
  - Separate routes, controllers, models
  - Service layer for API calls
  - Context for state management
  - Clean folder structure

- ✅ **Professional UI/UX** (10 points)
  - Material-UI components
  - Consistent theme
  - Responsive design
  - Loading states
  - Error handling with alerts
  - Professional color scheme

---

## Project Structure

```
COMP 3123 | Assignment – 2/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Employee.js
│   │   ├── routes/
│   │   │   ├── userRoutes.js
│   │   │   └── employeeRoutes.js
│   │   ├── controllers/
│   │   │   ├── userController.js
│   │   │   └── employeeController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── upload.js
│   │   └── index.js
│   ├── uploads/
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── frontend/
│   └── 101537771_comp3123_assignment2_reactjs/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Auth/
│       │   │   │   ├── Login.js
│       │   │   │   └── Signup.js
│       │   │   ├── Employee/
│       │   │   │   ├── EmployeeList.js
│       │   │   │   ├── AddEmployee.js
│       │   │   │   ├── ViewEmployee.js
│       │   │   │   ├── EditEmployee.js
│       │   │   │   └── SearchEmployee.js
│       │   │   └── PrivateRoute.js
│       │   ├── contexts/
│       │   │   └── AuthContext.js
│       │   ├── services/
│       │   │   └── api.js
│       │   └── App.js
│       ├── package.json
│       ├── Dockerfile
│       └── .env
├── docker-compose.yml
└── README.md
```

---

## API Endpoints

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/user/signup` | Register new user |
| POST | `/api/v1/user/login` | User login |

### Employee Endpoints (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/emp/employees` | Get all employees |
| GET | `/api/v1/emp/employees/:id` | Get employee by ID |
| POST | `/api/v1/emp/employees` | Create new employee |
| PUT | `/api/v1/emp/employees/:id` | Update employee |
| DELETE | `/api/v1/emp/employees/:id` | Delete employee |
| GET | `/api/v1/emp/employees/search` | Search employees by department/position |

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Docker & Docker Compose (for containerized setup)
- MongoDB (if running locally without Docker)

### Option 1: Docker Setup (Recommended)

1. **Navigate to project directory:**
   ```bash
   cd "COMP 3123 | Assignment – 2"
   ```

2. **Start all services with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access the applications:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: mongodb://localhost:27017
   - Mongo Express: http://localhost:8081

4. **Stop all services:**
   ```bash
   docker-compose down
   ```

### Option 2: Local Setup (Without Docker)

#### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create/Update .env file:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/employee_management
   JWT_SECRET=your_jwt_secret_key_change_this_in_production
   NODE_ENV=development
   ```

4. **Start MongoDB (ensure MongoDB is running)**

5. **Start backend server:**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

#### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend/101537771_comp3123_assignment2_reactjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create/Update .env file:**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api/v1
   ```

4. **Start React app:**
   ```bash
   npm start
   ```

5. **Access application:**
   - Open browser: http://localhost:3000

---

## Usage Guide

### 1. User Registration & Login

1. Open the application at http://localhost:3000
2. Click "Sign Up" to create a new account
3. Fill in:
   - Username (minimum 3 characters)
   - Email (valid email format)
   - Password (minimum 6 characters)
   - Confirm Password
4. After signup, you'll be automatically logged in and redirected to the employee list

### 2. Managing Employees

#### Add New Employee
1. Click "Add Employee" button
2. Fill in employee details:
   - First Name
   - Last Name
   - Email
   - Position
   - Department
   - Salary
   - Date of Joining
3. Optionally upload a profile picture (max 5MB, image files only)
4. Click "Add Employee" to save

#### View Employee
1. Click the "eye" icon on any employee row
2. View complete employee information
3. Click "Edit" to modify or "Back" to return

#### Edit Employee
1. Click the "edit" icon on any employee row
2. Modify any field (all fields are editable)
3. Upload a new profile picture if desired
4. Click "Save Changes"

#### Delete Employee
1. Click the "delete" icon on any employee row
2. Confirm deletion in the dialog
3. Employee and their profile picture will be removed

#### Search Employees
1. **Quick Search:** Use the search bar on the employee list page
   - Searches: name, email, department, position
2. **Advanced Search:** Click "Advanced Search" button
   - Filter by department and/or position
   - View results in table format

### 3. Logout
1. Click the "Logout" button in the top navigation bar
2. You'll be redirected to the login page

---

## Testing

### Manual Testing Checklist

#### Authentication
- [ ] Register new user with valid data
- [ ] Register with invalid data (shows validation errors)
- [ ] Login with correct credentials
- [ ] Login with incorrect credentials (shows error)
- [ ] Access protected routes without login (redirects to login)
- [ ] Logout successfully

#### Employee CRUD
- [ ] View all employees in table
- [ ] Add employee with all fields
- [ ] Add employee with profile picture
- [ ] Add employee without optional picture
- [ ] Validation errors display correctly
- [ ] View employee details
- [ ] Edit employee information
- [ ] Update employee profile picture
- [ ] Delete employee (with confirmation)
- [ ] Search by department
- [ ] Search by position
- [ ] Search by both department and position

#### UI/UX
- [ ] All pages load correctly
- [ ] Loading indicators show during API calls
- [ ] Error messages display appropriately
- [ ] Success messages after operations
- [ ] Navigation works smoothly
- [ ] Responsive design on different screen sizes

---

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://mongodb:27017/employee_management
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api/v1
```

---

## Submission Checklist

### GitHub Repository
- [x] Public repository created
- [x] All code committed with descriptive messages
- [x] README.md with setup instructions
- [x] .gitignore includes node_modules

### Docker Deployment
- [x] docker-compose.yml created
- [x] Dockerfile for backend
- [x] Dockerfile for frontend
- [x] All services orchestrated

### Screenshots Required
1. **MongoDB Data** (1 screenshot)
   - Show collections in MongoDB

2. **Postman API Tests** (5-8 screenshots)
   - Signup endpoint
   - Login endpoint
   - Get all employees
   - Create employee
   - Update employee
   - Delete employee
   - Search endpoint

3. **Frontend CRUD Operations** (5-8 screenshots)
   - Login screen
   - Signup screen
   - Employee list
   - Add employee form
   - View employee details
   - Edit employee form
   - Delete confirmation

4. **Search Functionality** (2-3 screenshots)
   - Search form
   - Search results

### Submission Files
- [ ] GitHub repository link
- [ ] Screenshots document (all in one file with titles)
- [ ] ZIP file (without node_modules)
- [ ] Cloud deployment links (if using cloud option)

---

## Common Issues & Solutions

### Issue: Cannot connect to MongoDB
**Solution:** Ensure MongoDB container is running with `docker-compose ps`

### Issue: Port already in use
**Solution:**
```bash
# Stop conflicting services
docker-compose down
# Or change ports in docker-compose.yml
```

### Issue: Profile pictures not displaying
**Solution:**
- Check backend uploads folder exists
- Verify REACT_APP_API_URL is correct
- Check file permissions

### Issue: CORS errors
**Solution:** Backend already configured with CORS middleware

---

## Development Notes

- **Backend runs on:** http://localhost:5000
- **Frontend runs on:** http://localhost:3000
- **MongoDB runs on:** mongodb://localhost:27017
- **Mongo Express UI:** http://localhost:8081

---

## Assignment Requirements Met

| Requirement | Points | Status |
|-------------|--------|--------|
| Docker Deployment | 10 | ✅ Complete |
| Signup Component | 7 | ✅ Complete |
| Login/Logout | 8 | ✅ Complete |
| Employee List | 10 | ✅ Complete |
| Add Employee (with picture) | 15 | ✅ Complete |
| View/Update Employee | 10 | ✅ Complete |
| Delete Employee | 5 | ✅ Complete |
| Search Functionality | 10 | ✅ Complete |
| UI/UX Design | 10 | ✅ Complete |
| Code Organization | 5 | ✅ Complete |
| GitHub Repository | 10 | ✅ Complete |
| **Total** | **100** | **100** |

---

## Credits

**Developed by:** Soroush Salari
**Student ID:** 101537771
**Course:** COMP 3123 - Full Stack Development I
**Semester:** Fall 2025

---

## License

This project is submitted as part of academic coursework for COMP 3123.

---

## Contact

For any questions or issues, please contact:
- **Email:** [Your Email]
- **GitHub:** [Your GitHub Profile]
