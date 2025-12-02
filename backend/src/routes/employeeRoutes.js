const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const employeeController = require('../controllers/employeeController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Validation rules
const employeeValidation = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ max: 50 })
    .withMessage('First name cannot exceed 50 characters'),
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ max: 50 })
    .withMessage('Last name cannot exceed 50 characters'),
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('position')
    .trim()
    .notEmpty()
    .withMessage('Position is required')
    .isLength({ max: 100 })
    .withMessage('Position cannot exceed 100 characters'),
  body('department')
    .trim()
    .notEmpty()
    .withMessage('Department is required')
    .isLength({ max: 100 })
    .withMessage('Department cannot exceed 100 characters'),
  body('salary')
    .isNumeric()
    .withMessage('Salary must be a number')
    .custom((value) => value >= 0)
    .withMessage('Salary cannot be negative')
];

// All routes require authentication
router.use(auth);

// Routes
router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/search', employeeController.searchEmployees);
router.get('/employees/:id', employeeController.getEmployeeById);
router.post('/employees', upload.single('profilePicture'), employeeValidation, employeeController.createEmployee);
router.put('/employees/:id', upload.single('profilePicture'), employeeValidation, employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
