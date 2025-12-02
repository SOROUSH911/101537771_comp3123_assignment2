# COMP 3123 Assignment 2 - Screenshots Document

**Student Name:** Soroush Salari
**Student ID:** 101537771
**Course:** COMP 3123 - Full Stack Development I
**Assignment:** Assignment 2 - Employee Management System

---

## Screenshots Checklist

Take screenshots in order and paste them below each section.

---

## 1. MongoDB Data (1 screenshot)

**URL:** http://localhost:8081 (Login: admin / admin123)

**Screenshot 1: MongoDB Collections**
- Navigate to `employee_management` database
- Show both `users` and `employees` collections with sample data

*[PASTE SCREENSHOT HERE]*

---

## 2. Postman API Tests (8 screenshots)

### Screenshot 2: User Signup
- **Endpoint:** `POST http://localhost:5000/api/v1/user/signup`
- **Body (JSON):**
```json
{
  "username": "soroush",
  "email": "soroush@example.com",
  "password": "password123"
}
```

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 3: User Login
- **Endpoint:** `POST http://localhost:5000/api/v1/user/login`
- **Body (JSON):**
```json
{
  "email": "soroush@example.com",
  "password": "password123"
}
```

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 4: Get All Employees
- **Endpoint:** `GET http://localhost:5000/api/v1/emp/employees`
- **Headers:** `Authorization: Bearer <YOUR_TOKEN>`

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 5: Create Employee
- **Endpoint:** `POST http://localhost:5000/api/v1/emp/employees`
- **Headers:** `Authorization: Bearer <YOUR_TOKEN>`
- **Body (form-data):**
  - firstName: John
  - lastName: Doe
  - email: john.doe@example.com
  - position: Software Developer
  - department: IT
  - salary: 75000
  - dateOfJoining: 2024-01-15
  - profilePicture: [upload image file]

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 6: Get Employee by ID
- **Endpoint:** `GET http://localhost:5000/api/v1/emp/employees/:id`
- **Headers:** `Authorization: Bearer <YOUR_TOKEN>`

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 7: Update Employee
- **Endpoint:** `PUT http://localhost:5000/api/v1/emp/employees/:id`
- **Headers:** `Authorization: Bearer <YOUR_TOKEN>`
- **Body:** Updated fields

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 8: Search Employees
- **Endpoint:** `GET http://localhost:5000/api/v1/emp/employees/search?department=IT`
- **Headers:** `Authorization: Bearer <YOUR_TOKEN>`

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 9: Delete Employee
- **Endpoint:** `DELETE http://localhost:5000/api/v1/emp/employees/:id`
- **Headers:** `Authorization: Bearer <YOUR_TOKEN>`

*[PASTE SCREENSHOT HERE]*

---

## 3. Frontend CRUD Operations (8 screenshots)

### Screenshot 10: Signup Screen
- **URL:** http://localhost:3000/signup

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 11: Login Screen
- **URL:** http://localhost:3000/login

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 12: Employee List (Main Dashboard)
- **URL:** http://localhost:3000/employees
- Show table with employees, action buttons

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 13: Add Employee Form
- **URL:** http://localhost:3000/employees/add
- Show filled form with profile picture

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 14: View Employee Details
- **URL:** http://localhost:3000/employees/view/:id

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 15: Edit Employee Form
- **URL:** http://localhost:3000/employees/edit/:id

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 16: Delete Confirmation Dialog
- Show the confirmation popup

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 17: Form Validation Errors
- Submit form with invalid/empty data

*[PASTE SCREENSHOT HERE]*

---

## 4. Search Functionality (2 screenshots)

### Screenshot 18: Advanced Search Form
- **URL:** http://localhost:3000/employees/search

*[PASTE SCREENSHOT HERE]*

---

### Screenshot 19: Search Results
- Show filtered results after searching

*[PASTE SCREENSHOT HERE]*

---

## Quick Access URLs

| Service | URL | Credentials |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | - |
| Backend API | http://localhost:5000 | - |
| Mongo Express | http://localhost:8081 | admin / admin123 |

## GitHub Repository

**URL:** https://github.com/SOROUSH911/101537771_comp3123_assignment2

---

*Total Screenshots Required: 19*
