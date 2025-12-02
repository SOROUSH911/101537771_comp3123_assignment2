import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EmployeeList from './components/Employee/EmployeeList';
import AddEmployee from './components/Employee/AddEmployee';
import ViewEmployee from './components/Employee/ViewEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import SearchEmployee from './components/Employee/SearchEmployee';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/employees"
              element={
                <PrivateRoute>
                  <EmployeeList />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/add"
              element={
                <PrivateRoute>
                  <AddEmployee />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/view/:id"
              element={
                <PrivateRoute>
                  <ViewEmployee />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/edit/:id"
              element={
                <PrivateRoute>
                  <EditEmployee />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/search"
              element={
                <PrivateRoute>
                  <SearchEmployee />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
