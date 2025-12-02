const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees
    });
  } catch (error) {
    console.error('Get all employees error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching employees',
      error: error.message
    });
  }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    res.status(200).json({
      success: true,
      data: employee
    });
  } catch (error) {
    console.error('Get employee by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching employee',
      error: error.message
    });
  }
};

// Create new employee
exports.createEmployee = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Delete uploaded file if validation fails
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { firstName, lastName, email, position, department, salary, dateOfJoining } = req.body;

    // Check if employee with email already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      // Delete uploaded file if email exists
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: 'Employee with this email already exists'
      });
    }

    // Create employee object
    const employeeData = {
      firstName,
      lastName,
      email,
      position,
      department,
      salary,
      dateOfJoining: dateOfJoining || Date.now()
    };

    // Add profile picture if uploaded
    if (req.file) {
      employeeData.profilePicture = req.file.filename;
    }

    const employee = new Employee(employeeData);
    await employee.save();

    res.status(201).json({
      success: true,
      message: 'Employee created successfully',
      data: employee
    });
  } catch (error) {
    // Delete uploaded file if error occurs
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    console.error('Create employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating employee',
      error: error.message
    });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Delete uploaded file if validation fails
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { firstName, lastName, email, position, department, salary, dateOfJoining } = req.body;

    // Find employee
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      // Delete uploaded file if employee not found
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    // Check if email is being changed and if it already exists
    if (email && email !== employee.email) {
      const existingEmployee = await Employee.findOne({ email });
      if (existingEmployee) {
        // Delete uploaded file if email exists
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(400).json({
          success: false,
          message: 'Employee with this email already exists'
        });
      }
    }

    // Update fields
    if (firstName) employee.firstName = firstName;
    if (lastName) employee.lastName = lastName;
    if (email) employee.email = email;
    if (position) employee.position = position;
    if (department) employee.department = department;
    if (salary) employee.salary = salary;
    if (dateOfJoining) employee.dateOfJoining = dateOfJoining;

    // Update profile picture if uploaded
    if (req.file) {
      // Delete old profile picture if exists
      if (employee.profilePicture) {
        const oldPicturePath = path.join(__dirname, '../../uploads', employee.profilePicture);
        if (fs.existsSync(oldPicturePath)) {
          fs.unlinkSync(oldPicturePath);
        }
      }
      employee.profilePicture = req.file.filename;
    }

    await employee.save();

    res.status(200).json({
      success: true,
      message: 'Employee updated successfully',
      data: employee
    });
  } catch (error) {
    // Delete uploaded file if error occurs
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    console.error('Update employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating employee',
      error: error.message
    });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    // Delete profile picture if exists
    if (employee.profilePicture) {
      const picturePath = path.join(__dirname, '../../uploads', employee.profilePicture);
      if (fs.existsSync(picturePath)) {
        fs.unlinkSync(picturePath);
      }
    }

    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Employee deleted successfully'
    });
  } catch (error) {
    console.error('Delete employee error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting employee',
      error: error.message
    });
  }
};

// Search employees by department or position
exports.searchEmployees = async (req, res) => {
  try {
    const { department, position } = req.query;

    if (!department && !position) {
      return res.status(400).json({
        success: false,
        message: 'Please provide department or position to search'
      });
    }

    // Build search query
    const searchQuery = {};
    if (department) {
      searchQuery.department = { $regex: department, $options: 'i' }; // Case-insensitive search
    }
    if (position) {
      searchQuery.position = { $regex: position, $options: 'i' }; // Case-insensitive search
    }

    const employees = await Employee.find(searchQuery).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees
    });
  } catch (error) {
    console.error('Search employees error:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching employees',
      error: error.message
    });
  }
};
