import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => {
  return (
    
    <Container maxWidth="lg" sx={{
       textAlign: 'center',
       py: 5 ,
      position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: 'url(https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=1024x1024&w=gi&k=20&c=2nU8Ac2_g9NiiRTgZXfBqSRx50tR4x8R7io7X1OCUFg=)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'brightness(65%)'
    }}>
      <Typography variant="h2" component="h1" color="success" gutterBottom>
        Welcome to the Clinic Management System
      </Typography>

      {/* Features Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/list"
              color="primary"
              variant="contained"
              fullWidth
              size="large"
              sx={{ py: 2 }}
            >
              View Patients
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              size="large"
              fullWidth
              startIcon={<SearchIcon />}
              sx={{ py: 2 }}
            >
              Search Patient
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/export"
              color="primary"
              variant="contained"
              fullWidth
              size="large"
              sx={{ py: 2 }}
            >
              Download Patients List
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* External Links Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary">
          External Links
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              color="primary"
              component="a"
              href="https://github.com/nirmal3002/clinic-Mgmt"
              target="_blank"
              variant="contained"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              fullWidth
              size="large"
              sx={{ py: 2 }}
            >
              GitHub
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              color="primary"
              component="a"
              href="https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?tab=t.0"
              target="_blank"
              variant="contained"
              rel="noopener noreferrer"
              fullWidth
              size="large"
              sx={{ py: 2 }}
            >
              My Resume
            </Button>
          </Grid>
        </Grid>
      </Box>
   </Container>
    
  );
};

export default HomePage;

