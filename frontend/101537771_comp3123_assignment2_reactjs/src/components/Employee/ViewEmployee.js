import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  Divider,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  AttachMoney as MoneyIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { employeeAPI } from '../../services/api';

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await employeeAPI.getById(id);

      if (response.data.success) {
        setEmployee(response.data.data);
      } else {
        setError('Employee not found');
      }
    } catch (error) {
      console.error('Error fetching employee:', error);
      setError(
        error.response?.data?.message ||
        'Failed to load employee details. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const getProfilePictureUrl = (filename) => {
    if (!filename) return null;
    return `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/uploads/${filename}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
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
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            Employee Details
          </Typography>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/employees/edit/${id}`)}
          >
            Edit
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Soroush Salari - 101537771
        </Typography>

        {employee && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Avatar
                src={getProfilePictureUrl(employee.profilePicture)}
                alt={`${employee.firstName} ${employee.lastName}`}
                sx={{
                  width: 150,
                  height: 150,
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: 3
                }}
              >
                <PersonIcon sx={{ fontSize: 80 }} />
              </Avatar>
            </Box>

            <Typography variant="h4" align="center" gutterBottom>
              {employee.firstName} {employee.lastName}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Chip
                icon={<WorkIcon />}
                label={employee.position}
                color="primary"
                size="medium"
              />
              <Chip
                icon={<BusinessIcon />}
                label={employee.department}
                color="secondary"
                size="medium"
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="h6" component="div">
                        Email
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {employee.email}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <MoneyIcon sx={{ mr: 1, color: 'success.main' }} />
                      <Typography variant="h6" component="div">
                        Salary
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      ${employee.salary.toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <WorkIcon sx={{ mr: 1, color: 'info.main' }} />
                      <Typography variant="h6" component="div">
                        Position
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {employee.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BusinessIcon sx={{ mr: 1, color: 'secondary.main' }} />
                      <Typography variant="h6" component="div">
                        Department
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {employee.department}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarIcon sx={{ mr: 1, color: 'warning.main' }} />
                      <Typography variant="h6" component="div">
                        Date of Joining
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {formatDate(employee.dateOfJoining)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {employee.createdAt && (
                <Grid item xs={12}>
                  <Card variant="outlined" sx={{ bgcolor: 'grey.50' }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="caption" color="text.secondary">
                            Created At
                          </Typography>
                          <Typography variant="body2">
                            {formatDate(employee.createdAt)}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="caption" color="text.secondary">
                            Last Updated
                          </Typography>
                          <Typography variant="body2">
                            {formatDate(employee.updatedAt || employee.createdAt)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => navigate(`/employees/edit/${id}`)}
                size="large"
              >
                Edit Employee
              </Button>
              <Button
                variant="outlined"
                startIcon={<BackIcon />}
                onClick={() => navigate('/employees')}
                size="large"
              >
                Back to List
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ViewEmployee;
