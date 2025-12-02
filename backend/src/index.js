const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully');
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  process.exit(1);
});

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Employee Management System API',
    author: 'Soroush Salari - 101537771',
    version: '1.0.0',
    endpoints: {
      users: {
        signup: 'POST /api/v1/user/signup',
        login: 'POST /api/v1/user/login'
      },
      employees: {
        getAll: 'GET /api/v1/emp/employees',
        getById: 'GET /api/v1/emp/employees/:id',
        create: 'POST /api/v1/emp/employees',
        update: 'PUT /api/v1/emp/employees/:id',
        delete: 'DELETE /api/v1/emp/employees/:id',
        search: 'GET /api/v1/emp/employees/search?department=&position='
      }
    }
  });
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  if (err.name === 'MulterError') {
    return res.status(400).json({
      success: false,
      message: 'File upload error',
      error: err.message
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}`);
});

module.exports = app;
