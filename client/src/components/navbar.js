import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  InputBase,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const notesPages = [
  { title: 'Home', path: '/notes/home' },
  { title: 'Schedule', path: '/notes/schedule' },
];

const Navbar = () => {
  const [notesAnchorEl, setNotesAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNotesClick = (event) => setNotesAnchorEl(event.currentTarget);
  const handleNotesClose = () => setNotesAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      {/* Main Navbar */}
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' }, mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Navbar Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clinic Management Project
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '4px',
              px: 1,
              mr: 2,
            }}
          >
            <SearchIcon />
            <InputBase placeholder="Search…" sx={{ ml: 1, color: 'white' }} />
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>

            {/* Notes Menu */}
            <Button
              color="inherit"
              onClick={handleNotesClick}
              startIcon={<MenuBookIcon />}
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

            {/* GitHub Icon */}
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/88chinu/clinicManagement"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', py: 2, backgroundColor: 'primary.main', color: 'white' }}
          >
            Menu
          </Typography>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/">
                <HomeIcon sx={{ mr: 1 }} />
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleNotesClick}>
                <MenuBookIcon sx={{ mr: 1 }} />
                <ListItemText primary="Notes" />
              </ListItemButton>
            </ListItem>
            {notesPages.map((page) => (
              <ListItem key={page.path} disablePadding>
                <ListItemButton component={RouterLink} to={page.path}>
                  <ListItemText primary={`- ${page.title}`} sx={{ pl: 4 }} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="https://github.com/88chinu/clinicManagement"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ mr: 1 }} />
                <ListItemText primary="GitHub" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuBookIcon from '@mui/icons-material/MenuBook'; // Added Notes icon

// const notesPages = [
//   { title: 'Home', path: '/notes/home' },
//   { title: 'Schedule', path: '/notes/schedule' },
// ];

// const Navbar = () => {
//   const [notesAnchorEl, setNotesAnchorEl] = useState(null);

//   const handleNotesClick = (event) => {
//     setNotesAnchorEl(event.currentTarget);
//   };

//   const handleNotesClose = () => {
//     setNotesAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
//           clinic Management Project
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Button
//             color="primary"
//             component={RouterLink}
//             to="/"
//             startIcon={<HomeIcon />}
//           >
//             Home
//           </Button>
//           <Button
//             color="primary"
//             onClick={handleNotesClick}
//             startIcon={<MenuBookIcon />} // Added icon here
//           >
//             Notes
//           </Button>
//           <Menu
//             anchorEl={notesAnchorEl}
//             open={Boolean(notesAnchorEl)}
//             onClose={handleNotesClose}
//           >
//             {notesPages.map((page) => (
//               <MenuItem 
//                 key={page.path} 
//                 component={RouterLink} 
//                 to={page.path}
//                 onClick={handleNotesClose}
//               >
//                 {page.title}
//               </MenuItem>
//             ))}
//           </Menu>
//           <IconButton
//             color="primary"
//             component="a"
//             href="https://github.com/bscCohort/bkmgmt-deploy"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             <GitHubIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;