import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Tooltip
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon
import LogoutIcon from '@mui/icons-material/ExitToApp'; // Logout icon

const notesPages = [
  { title: 'Home', path: '/notes/home' },
  { title: 'Schedule', path: '/notes/schedule' },
];

const Navbar = () => {
  const [notesAnchorEl, setNotesAnchorEl] = useState(null);

  const handleNotesClick = (event) => {
    setNotesAnchorEl(event.currentTarget);
  };

  const handleNotesClose = () => {
    setNotesAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  };

  const token = localStorage.getItem("token"); // Check if the token exists

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Clinic Management Project
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            color="primary"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            color="primary"
            onClick={handleNotesClick}
            startIcon={<MenuBookIcon />} // Added icon here
          >
            Notes
          </Button>
          <Menu
            anchorEl={notesAnchorEl}
            open={Boolean(notesAnchorEl)}
            onClose={handleNotesClose}
          >
            {notesPages.map((page) => (
              <MenuItem 
                key={page.path} 
                component={RouterLink} 
                to={page.path}
                onClick={handleNotesClose}
              >
                {page.title}
              </MenuItem>
            ))}
          </Menu>

          {/* Show Logout button only if the user is logged in */}
          {token && (
            <Tooltip title="Logout">
              <IconButton color="primary" onClick={handleLogout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
