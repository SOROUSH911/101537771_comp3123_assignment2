# Quick Start Guide

**Student:** Soroush Salari (101537771)

---

## Fastest Way to Run the Project

### Option 1: Docker (Recommended)

```bash
# Navigate to project folder
cd "COMP 3123 | Assignment – 2"

# Start all services
docker-compose up --build

# Access the app:
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# Mongo Express: http://localhost:8081

# Stop all services
docker-compose down
```

### Option 2: Local Development

#### Terminal 1 - Start Backend
```bash
cd "COMP 3123 | Assignment – 2/backend"
npm install
npm start
```

#### Terminal 2 - Start Frontend
```bash
cd "COMP 3123 | Assignment – 2/frontend/101537771_comp3123_assignment2_reactjs"
npm install
npm start
```

#### Terminal 3 - Start MongoDB
```bash
# Make sure MongoDB is installed and running
mongod
```

---

## First Time Setup

### 1. Sign Up
- Open http://localhost:3000
- Click "Sign Up"
- Create account:
  - Username: soroush
  - Email: soroush@example.com
  - Password: password123

### 2. Add Sample Employees

Add a few employees to test the system:

**Employee 1:**
- First Name: John
- Last Name: Doe
- Email: john.doe@company.com
- Position: Software Developer
- Department: IT
- Salary: 75000
- Upload a profile picture

**Employee 2:**
- First Name: Jane
- Last Name: Smith
- Email: jane.smith@company.com
- Position: Project Manager
- Department: Management
- Salary: 85000

**Employee 3:**
- First Name: Bob
- Last Name: Johnson
- Email: bob.johnson@company.com
- Position: DevOps Engineer
- Department: IT
- Salary: 80000

### 3. Test Features

- ✅ View all employees
- ✅ Search by department: "IT"
- ✅ Edit an employee
- ✅ Delete an employee
- ✅ Logout and login again

---

## API Testing with Postman

### 1. Signup
```
POST http://localhost:5000/api/v1/user/signup
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "test123"
}
```

### 2. Login
```
POST http://localhost:5000/api/v1/user/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "test123"
}
```
**Copy the token from response!**

### 3. Get All Employees
```
GET http://localhost:5000/api/v1/emp/employees
Authorization: Bearer YOUR_TOKEN_HERE
```

### 4. Create Employee
```
POST http://localhost:5000/api/v1/emp/employees
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: multipart/form-data

Form Data:
- firstName: John
- lastName: Doe
- email: john@example.com
- position: Developer
- department: IT
- salary: 70000
- dateOfJoining: 2024-01-15
- profilePicture: [select image file]
```

### 5. Search Employees
```
GET http://localhost:5000/api/v1/emp/employees/search?department=IT
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Docker Issues
```bash
# Clean up Docker
docker-compose down -v
docker system prune -a

# Rebuild
docker-compose up --build
```

### Cannot Connect to MongoDB
```bash
# Check if MongoDB is running
docker-compose ps

# Or for local MongoDB
ps aux | grep mongod
```

### Frontend Not Loading
```bash
# Clear npm cache
cd frontend/101537771_comp3123_assignment2_reactjs
rm -rf node_modules package-lock.json
npm install
```

---

## Project URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Docs:** http://localhost:5000 (root endpoint shows all routes)
- **MongoDB:** mongodb://localhost:27017
- **Mongo Express:** http://localhost:8081
  - Username: admin
  - Password: admin123

---

## Common Commands

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd frontend/101537771_comp3123_assignment2_reactjs && npm install

# Start backend in dev mode (with auto-reload)
cd backend && npm run dev

# Build frontend for production
cd frontend/101537771_comp3123_assignment2_reactjs && npm run build

# Run Docker in detached mode
docker-compose up -d

# View Docker logs
docker-compose logs -f

# Stop Docker
docker-compose down

# Remove all Docker data
docker-compose down -v
```

---

## For Submission

### 1. Create GitHub Repository
```bash
cd "COMP 3123 | Assignment – 2"
git init
git add .
git commit -m "Complete Employee Management System - Soroush Salari (101537771)"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

### 2. Remove node_modules Before Zipping
```bash
rm -rf backend/node_modules
rm -rf frontend/101537771_comp3123_assignment2_reactjs/node_modules
```

### 3. Create ZIP
```bash
zip -r "101537771_SoroushSalari_COMP3123_Assignment2.zip" . -x "*.git*" -x "*node_modules*"
```

---

## Features Checklist

### Backend ✅
- [x] User signup/login with JWT
- [x] All employee CRUD endpoints
- [x] Search by department/position
- [x] Profile picture upload
- [x] Input validation
- [x] Error handling

### Frontend ✅
- [x] Login/Signup screens
- [x] Employee list with table
- [x] Add employee form
- [x] View employee details
- [x] Edit employee form
- [x] Delete with confirmation
- [x] Advanced search
- [x] Material-UI design
- [x] Responsive layout

### DevOps ✅
- [x] Docker Compose setup
- [x] Backend Dockerfile
- [x] Frontend Dockerfile
- [x] MongoDB container
- [x] Mongo Express UI

---

**Ready to submit! Good luck! 🚀**

Student: Soroush Salari | ID: 101537771
