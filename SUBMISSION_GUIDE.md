# COMP 3123 Assignment 2 - Submission Guide

**Student:** Soroush Salari (101537771)
**Deadline:** Week 13 - Sunday, November 30th, 2025, 23:59 PM

---

## What You Need to Submit

### 1. GitHub Repository ✅

#### Step 1: Create GitHub Repository
```bash
# Navigate to project folder
cd "/Users/sepsepi/Desktop/Sorosh gay/COMP 3123 | Assignment – 2"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete Employee Management System

- Backend API with Express, MongoDB, JWT authentication
- Frontend React app with Material-UI
- Docker configuration with docker-compose
- Complete CRUD operations for employees
- Search functionality by department/position
- Profile picture upload feature
- User authentication and authorization

Student: Soroush Salari (101537771)
Course: COMP 3123 Assignment 2"

# Create GitHub repository (go to github.com)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Step 2: Ensure Repository is Public
- Go to repository Settings
- Scroll to "Danger Zone"
- Change visibility to Public

#### What to Submit:
- **GitHub Repository URL:** `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

---

### 2. Screenshots (All in ONE PDF/Word Document) ✅

Create a document with all screenshots organized with clear titles:

#### A. MongoDB Data (1 screenshot)
**Title:** "MongoDB Collections - Employee Management Database"
- Take screenshot of MongoDB Compass or Mongo Express
- Show:
  - Users collection with sample data
  - Employees collection with sample data
  - Database name: employee_management

**How to get it:**
- Access Mongo Express: http://localhost:8081
- Navigate to `employee_management` database
- Screenshot the collections view

---

#### B. Postman API Tests (5-8 screenshots)

**Screenshot 1: User Signup**
- **Title:** "POST /api/v1/user/signup - User Registration"
- Endpoint: `http://localhost:5000/api/v1/user/signup`
- Method: POST
- Body (JSON):
```json
{
  "username": "soroush",
  "email": "soroush@example.com",
  "password": "password123"
}
```
- Show successful response with token

**Screenshot 2: User Login**
- **Title:** "POST /api/v1/user/login - User Authentication"
- Endpoint: `http://localhost:5000/api/v1/user/login`
- Method: POST
- Body (JSON):
```json
{
  "email": "soroush@example.com",
  "password": "password123"
}
```
- Show successful response with token

**Screenshot 3: Get All Employees**
- **Title:** "GET /api/v1/emp/employees - Fetch All Employees"
- Endpoint: `http://localhost:5000/api/v1/emp/employees`
- Method: GET
- Headers:
  - Authorization: `Bearer YOUR_TOKEN_HERE`
- Show array of employees

**Screenshot 4: Create Employee**
- **Title:** "POST /api/v1/emp/employees - Create New Employee"
- Endpoint: `http://localhost:5000/api/v1/emp/employees`
- Method: POST
- Headers:
  - Authorization: `Bearer YOUR_TOKEN_HERE`
- Body (form-data):
```
firstName: John
lastName: Doe
email: john.doe@example.com
position: Software Developer
department: IT
salary: 75000
dateOfJoining: 2024-01-15
profilePicture: [upload an image file]
```
- Show successful creation response

**Screenshot 5: Get Employee by ID**
- **Title:** "GET /api/v1/emp/employees/:id - Get Single Employee"
- Endpoint: `http://localhost:5000/api/v1/emp/employees/EMPLOYEE_ID`
- Method: GET
- Headers:
  - Authorization: `Bearer YOUR_TOKEN_HERE`
- Show employee details

**Screenshot 6: Update Employee**
- **Title:** "PUT /api/v1/emp/employees/:id - Update Employee"
- Endpoint: `http://localhost:5000/api/v1/emp/employees/EMPLOYEE_ID`
- Method: PUT
- Headers:
  - Authorization: `Bearer YOUR_TOKEN_HERE`
- Body (form-data with updated values)
- Show updated employee data

**Screenshot 7: Search Employees**
- **Title:** "GET /api/v1/emp/employees/search - Search by Department/Position"
- Endpoint: `http://localhost:5000/api/v1/emp/employees/search?department=IT`
- Method: GET
- Headers:
  - Authorization: `Bearer YOUR_TOKEN_HERE`
- Show filtered results

**Screenshot 8: Delete Employee**
- **Title:** "DELETE /api/v1/emp/employees/:id - Delete Employee"
- Endpoint: `http://localhost:5000/api/v1/emp/employees/EMPLOYEE_ID`
- Method: DELETE
- Headers:
  - Authorization: `Bearer YOUR_TOKEN_HERE`
- Show success message

---

#### C. Frontend CRUD Operations (5-8 screenshots)

**Screenshot 1: Signup Screen**
- **Title:** "Signup Page - User Registration Form"
- URL: `http://localhost:3000/signup`
- Show the signup form with validation

**Screenshot 2: Login Screen**
- **Title:** "Login Page - User Authentication"
- URL: `http://localhost:3000/login`
- Show the login form

**Screenshot 3: Employee List**
- **Title:** "Employee List - Main Dashboard with All Employees"
- URL: `http://localhost:3000/employees`
- Show table with multiple employees
- Include profile pictures, action buttons

**Screenshot 4: Add Employee Form**
- **Title:** "Add Employee - Create New Employee Form"
- URL: `http://localhost:3000/employees/add`
- Show filled form with profile picture upload

**Screenshot 5: View Employee Details**
- **Title:** "View Employee - Detailed Employee Information"
- URL: `http://localhost:3000/employees/view/:id`
- Show employee details card

**Screenshot 6: Edit Employee Form**
- **Title:** "Edit Employee - Update Employee Information"
- URL: `http://localhost:3000/employees/edit/:id`
- Show pre-filled edit form

**Screenshot 7: Delete Confirmation**
- **Title:** "Delete Employee - Confirmation Dialog"
- Show the confirmation popup before deletion

**Screenshot 8: Validation Errors**
- **Title:** "Form Validation - Error Messages Display"
- Show form with validation error messages

---

#### D. Search Functionality (2-3 screenshots)

**Screenshot 1: Quick Search**
- **Title:** "Quick Search - Search Bar in Employee List"
- Show search bar with results filtering

**Screenshot 2: Advanced Search Form**
- **Title:** "Advanced Search - Search by Department and Position"
- URL: `http://localhost:3000/employees/search`
- Show search form with filters

**Screenshot 3: Search Results**
- **Title:** "Search Results - Filtered Employee List"
- Show results table after searching

---

### 3. ZIP File Submission ✅

#### CRITICAL: Remove node_modules Before Zipping

```bash
# Navigate to project directory
cd "/Users/sepsepi/Desktop/Sorosh gay/COMP 3123 | Assignment – 2"

# Remove all node_modules folders
rm -rf backend/node_modules
rm -rf frontend/101537771_comp3123_assignment2_reactjs/node_modules

# Create ZIP file
# On macOS:
zip -r "101537771_SoroushSalari_COMP3123_Assignment2.zip" . -x "*.git*" -x "*node_modules*" -x "*.DS_Store"

# Or use Finder:
# 1. Select the project folder
# 2. Right-click > Compress
# 3. Rename to: 101537771_SoroushSalari_COMP3123_Assignment2.zip
```

#### What to Include in ZIP:
- ✅ Backend code (without node_modules)
- ✅ Frontend code (without node_modules)
- ✅ docker-compose.yml
- ✅ Dockerfiles
- ✅ README.md
- ✅ .env files (or .env.example)
- ✅ All source code

#### What NOT to Include:
- ❌ node_modules folders
- ❌ .git folder (optional)
- ❌ uploads folder (optional)
- ❌ build/dist folders

---

### 4. Cloud Deployment (Optional Alternative to Docker) ⚠️

If you choose cloud deployment instead of Docker:

#### Backend Deployment Options:
- **Render.com** (Recommended - Free tier)
- **Railway.app**
- **Heroku** (requires payment now)

#### Frontend Deployment Options:
- **Vercel** (Recommended - Free)
- **Netlify**
- **GitHub Pages**

#### Database:
- **MongoDB Atlas** (Free tier - 512MB)

**What to Submit:**
- Backend URL: `https://your-backend.render.com`
- Frontend URL: `https://your-frontend.vercel.app`

---

## Submission Checklist

Before submitting, verify:

### GitHub Repository
- [ ] Repository is PUBLIC
- [ ] All code is committed
- [ ] README.md is comprehensive
- [ ] .gitignore includes node_modules
- [ ] Commit messages are descriptive
- [ ] Repository name follows convention

### Screenshots Document
- [ ] All screenshots in ONE file (PDF or Word)
- [ ] Each screenshot has a clear title
- [ ] MongoDB data visible
- [ ] 5-8 Postman API tests included
- [ ] 5-8 Frontend screenshots included
- [ ] 2-3 Search functionality screenshots included
- [ ] All screenshots are clear and readable
- [ ] Student name and ID on first page

### ZIP File
- [ ] node_modules removed from backend
- [ ] node_modules removed from frontend
- [ ] File named correctly: 101537771_SoroushSalari_COMP3123_Assignment2.zip
- [ ] ZIP file size is reasonable (<5MB without node_modules)
- [ ] All source code included
- [ ] README.md included

### Deployment
- [ ] Docker compose works (`docker-compose up`)
- [ ] OR Cloud deployment links provided
- [ ] All services are accessible

---

## Final Submission Steps

### D2L Submission

1. **Go to D2L Course Page**
2. **Navigate to Assignments**
3. **Find "Assignment 2 - Full Stack Development"**
4. **Submit the following:**

   **Text Submission:**
   ```
   Student Name: Soroush Salari
   Student ID: 101537771

   GitHub Repository:
   https://github.com/YOUR_USERNAME/YOUR_REPO_NAME

   Deployment URLs (if applicable):
   Backend: https://your-backend-url.com
   Frontend: https://your-frontend-url.com
   ```

   **File Attachments:**
   - `101537771_SoroushSalari_Screenshots.pdf` (or .docx)
   - `101537771_SoroushSalari_COMP3123_Assignment2.zip`

5. **Click Submit**

---

## Testing Before Submission

### Complete Test Workflow

1. **Start the application:**
```bash
docker-compose up --build
```

2. **Test Authentication:**
   - Sign up a new user
   - Log in with credentials
   - Verify token storage
   - Test logout

3. **Test Employee CRUD:**
   - Add 3-5 employees with pictures
   - View each employee
   - Edit employee details
   - Delete an employee
   - Verify all operations

4. **Test Search:**
   - Search by department
   - Search by position
   - Search by both
   - Verify results

5. **Take Screenshots:**
   - Follow the screenshot guide above
   - Ensure all screenshots are clear

6. **Test with Postman:**
   - Import collection (create one if needed)
   - Test all endpoints
   - Save screenshots

---

## Important Reminders

### DO:
✅ Remove node_modules before zipping
✅ Make GitHub repository PUBLIC
✅ Include all screenshots with titles
✅ Test everything before submission
✅ Submit before deadline
✅ Include student ID in all file names

### DON'T:
❌ Submit with node_modules (file will be too large)
❌ Make repository private
❌ Submit separate screenshot files
❌ Wait until last minute
❌ Forget to test Docker setup

---

## Grading Breakdown

| Component | Points | What's Evaluated |
|-----------|--------|------------------|
| Docker/Deployment | 10 | docker-compose works, all services run |
| Signup | 7 | Validation, error handling, design |
| Login/Logout | 8 | Authentication, session management |
| Employee List | 10 | Display, design, functionality |
| Add Employee | 15 | Form, validation, picture upload |
| View/Update | 10 | Display, edit form, validation |
| Delete | 5 | Confirmation, deletion works |
| Search | 10 | Filter by dept/position, results |
| UI/UX | 10 | Material-UI, responsive, professional |
| Code Organization | 5 | Structure, modules, services |
| GitHub | 10 | Commits, README, public repo |

---

## Support

If you encounter issues:
1. Check README.md troubleshooting section
2. Verify all services are running
3. Check console for errors
4. Review assignment requirements
5. Test with provided commands

---

## Final Notes

- **No extensions granted** - Submit on time
- **Late submission** - Check course policy
- **Partial credit** - Complete as much as possible
- **Academic integrity** - Your own work only

Good luck with your submission!

---

**Student:** Soroush Salari
**ID:** 101537771
**Course:** COMP 3123 - Full Stack Development I
