import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
  Avatar,
  Card,
  CardContent
} from '@mui/material';
import { ArrowBack as BackIcon, Save as SaveIcon } from '@mui/icons-material';
import { employeeAPI } from '../../services/api';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    department: '',
    salary: '',
    dateOfJoining: '',
    profilePicture: null
  });
  const [currentProfilePicture, setCurrentProfilePicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      setApiError('');
      const response = await employeeAPI.getById(id);

      if (response.data.success) {
        const employee = response.data.data;
        setFormData({
          firstName: employee.firstName || '',
          lastName: employee.lastName || '',
          email: employee.email || '',
          position: employee.position || '',
          department: employee.department || '',
          salary: employee.salary || '',
          dateOfJoining: employee.dateOfJoining ? employee.dateOfJoining.split('T')[0] : '',
          profilePicture: null
        });
        setCurrentProfilePicture(employee.profilePicture);
      } else {
        setApiError('Employee not found');
      }
    } catch (error) {
      console.error('Error fetching employee:', error);
      setApiError(
        error.response?.data?.message ||
        'Failed to load employee details. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length > 50) {
      newErrors.firstName = 'First name cannot exceed 50 characters';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length > 50) {
      newErrors.lastName = 'Last name cannot exceed 50 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.position) {
      newErrors.position = 'Position is required';
    } else if (formData.position.length > 100) {
      newErrors.position = 'Position cannot exceed 100 characters';
    }

    if (!formData.department) {
      newErrors.department = 'Department is required';
    } else if (formData.department.length > 100) {
      newErrors.department = 'Department cannot exceed 100 characters';
    }

    if (!formData.salary) {
      newErrors.salary = 'Salary is required';
    } else if (isNaN(formData.salary) || Number(formData.salary) < 0) {
      newErrors.salary = 'Salary must be a positive number';
    }

    if (!formData.dateOfJoining) {
      newErrors.dateOfJoining = 'Date of joining is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setApiError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          profilePicture: 'Please select an image file'
        }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          profilePicture: 'File size must be less than 5MB'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));
      setPreview(URL.createObjectURL(file));
      setErrors(prev => ({
        ...prev,
        profilePicture: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setApiError('');

    try {
      const updateData = { ...formData };

      // Only include profilePicture if a new one was selected
      if (!formData.profilePicture) {
        delete updateData.profilePicture;
      }

      const response = await employeeAPI.update(id, updateData);

      if (response.data.success) {
        navigate('/employees');
      }
    } catch (error) {
      console.error('Update employee error:', error);
      setApiError(
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        'Failed to update employee. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const getProfilePictureUrl = (filename) => {
    if (!filename) return null;
    return `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/uploads/${filename}`;
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (apiError && !formData.firstName) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {apiError}
        </Alert>
        <Button
          variant="contained"
          startIcon={<BackIcon />}
          onClick={() => navigate('/employees')}
        >
          Back to Employee List
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Button
            startIcon={<BackIcon />}
            onClick={() => navigate('/employees')}
            sx={{ mr: 2 }}
          >
            Back
          </Button>
          <Typography variant="h4" component="h1">
            Edit Employee
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Soroush Salari - 101537771
        </Typography>

        {apiError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {apiError}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Card variant="outlined" sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Picture
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 1 }}>
                    Current Photo
                  </Typography>
                  <Avatar
                    src={getProfilePictureUrl(currentProfilePicture)}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                {preview && (
                  <>
                    <Typography variant="h6" color="text.secondary">
                      →
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 1 }}>
                        New Photo
                      </Typography>
                      <Avatar
                        src={preview}
                        sx={{ width: 100, height: 100 }}
                      />
                    </Box>
                  </>
                )}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" component="label">
                  {preview ? 'Change Photo' : 'Upload New Photo'}
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Button>
                {errors.profilePicture && (
                  <Typography variant="caption" color="error" display="block" sx={{ mt: 1 }}>
                    {errors.profilePicture}
                  </Typography>
                )}
                {!preview && (
                  <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
                    Leave empty to keep current photo
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                error={!!errors.position}
                helperText={errors.position}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                error={!!errors.department}
                helperText={errors.department}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Salary"
                name="salary"
                type="number"
                value={formData.salary}
                onChange={handleChange}
                error={!!errors.salary}
                helperText={errors.salary}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Date of Joining"
                name="dateOfJoining"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dateOfJoining}
                onChange={handleChange}
                error={!!errors.dateOfJoining}
                helperText={errors.dateOfJoining}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
              disabled={submitting}
              fullWidth
            >
              {submitting ? <CircularProgress size={24} /> : 'Update Employee'}
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/employees')}
              fullWidth
              disabled={submitting}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditEmployee;
