import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  // Check if the token exists in localStorage
  const token = localStorage.getItem("token");
  console.log(token);

  // If token doesn't exist, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token exists, allow access to the requested route
  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;
