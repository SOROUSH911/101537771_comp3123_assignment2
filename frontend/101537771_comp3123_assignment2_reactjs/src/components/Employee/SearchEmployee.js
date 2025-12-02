import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Chip,
  Card,
  CardContent
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Search as SearchIcon,
  Visibility as ViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Clear as ClearIcon
} from '@mui/icons-material';
import { employeeAPI } from '../../services/api';

const SearchEmployee = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    department: '',
    position: ''
  });
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchParams.department && !searchParams.position) {
      setError('Please enter at least one search criterion (department or position)');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(false);

    try {
      // Build query params, only include non-empty values
      const params = {};
      if (searchParams.department) {
        params.department = searchParams.department;
      }
      if (searchParams.position) {
        params.position = searchParams.position;
      }

      const response = await employeeAPI.search(params);

      if (response.data.success) {
        setEmployees(response.data.data || []);
        setSearched(true);
      }
    } catch (error) {
      console.error('Search error:', error);
      setError(
        error.response?.data?.message ||
        'Failed to search employees. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchParams({
      department: '',
      position: ''
    });
    setEmployees([]);
    setError('');
    setSearched(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await employeeAPI.delete(id);
        setEmployees(employees.filter(emp => emp._id !== id));
        setError('');
      } catch (error) {
        console.error('Error deleting employee:', error);
        setError('Failed to delete employee. Please try again.');
      }
    }
  };

  const getProfilePictureUrl = (filename) => {
    if (!filename) return null;
    return `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/uploads/${filename}`;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
            Advanced Employee Search
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Soroush Salari - 101537771
        </Typography>

        <Card variant="outlined" sx={{ mb: 3, bgcolor: 'primary.50' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Search Criteria
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Enter department and/or position to search for employees. You can use partial matches.
            </Typography>

            <Box component="form" onSubmit={handleSearch} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={searchParams.department}
                    onChange={handleChange}
                    placeholder="e.g., IT, HR, Finance"
                    helperText="Search by department name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Position"
                    name="position"
                    value={searchParams.position}
                    onChange={handleChange}
                    placeholder="e.g., Manager, Developer, Analyst"
                    helperText="Search by position/title"
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SearchIcon />}
                  disabled={loading}
                  fullWidth
                >
                  {loading ? <CircularProgress size={24} /> : 'Search Employees'}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ClearIcon />}
                  onClick={handleClear}
                  disabled={loading}
                  fullWidth
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {searched && (
          <>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                Search Results
              </Typography>
              <Chip
                label={`${employees.length} ${employees.length === 1 ? 'employee' : 'employees'} found`}
                color="primary"
              />
            </Box>

            {employees.length > 0 ? (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'primary.main' }}>
                      <TableCell sx={{ color: 'white' }}>Photo</TableCell>
                      <TableCell sx={{ color: 'white' }}>Name</TableCell>
                      <TableCell sx={{ color: 'white' }}>Email</TableCell>
                      <TableCell sx={{ color: 'white' }}>Position</TableCell>
                      <TableCell sx={{ color: 'white' }}>Department</TableCell>
                      <TableCell sx={{ color: 'white' }}>Salary</TableCell>
                      <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee._id} hover>
                        <TableCell>
                          <Avatar
                            src={getProfilePictureUrl(employee.profilePicture)}
                            alt={`${employee.firstName} ${employee.lastName}`}
                          >
                            {employee.firstName[0]}{employee.lastName[0]}
                          </Avatar>
                        </TableCell>
                        <TableCell>
                          {employee.firstName} {employee.lastName}
                        </TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>
                          <Chip label={employee.position} color="primary" size="small" />
                        </TableCell>
                        <TableCell>
                          <Chip label={employee.department} color="secondary" size="small" />
                        </TableCell>
                        <TableCell>${employee.salary.toLocaleString()}</TableCell>
                        <TableCell>
                          <IconButton
                            color="info"
                            onClick={() => navigate(`/employees/view/${employee._id}`)}
                            title="View"
                          >
                            <ViewIcon />
                          </IconButton>
                          <IconButton
                            color="primary"
                            onClick={() => navigate(`/employees/edit/${employee._id}`)}
                            title="Edit"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => handleDelete(employee._id)}
                            title="Delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Alert severity="info">
                No employees found matching your search criteria. Try different search terms.
              </Alert>
            )}
          </>
        )}

        {!searched && !loading && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <SearchIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              Enter search criteria above to find employees
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You can search by department, position, or both
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 3 }}>
          <Button
            variant="outlined"
            startIcon={<BackIcon />}
            onClick={() => navigate('/employees')}
            fullWidth
          >
            Back to Employee List
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SearchEmployee;
