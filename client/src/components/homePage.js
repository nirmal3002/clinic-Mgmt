import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import PeopleIcon from '@mui/icons-material/People';

const HomePage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundImage:
          'url(https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=1024x1024&w=gi&k=20&c=2nU8Ac2_g9NiiRTgZXfBqSRx50tR4x8R7io7X1OCUFg=)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          py: 5,
          color: 'white',
        }}
      > 
            {/* Welcome Section */}

      <Box
      sx={{
        py: 4,
        px: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 2,
        display: 'inline-block',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the Clinic Management System
      </Typography>
      <Typography variant="h6" gutterBottom>
        Manage patients efficiently and effectively with our intuitive platform.
      </Typography>
    </Box>
        {/* Features Section */}
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'black',
              display: 'inline-block',
              py: 1,
              px: 3,
              borderRadius: 1,
            }}
          >
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Button
                  component={Link}
                  to="/list"
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<PeopleIcon />}
                >
                  View Patients
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Button
                  component={Link}
                  to="/search"
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<SearchIcon />}
                >
                  Search Patient
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Button
                  component={Link}
                  to="/export"
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<DownloadIcon />}
                >
                  Download Patients List
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* External Links Section */}
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'black',
              display: 'inline-block',
              py: 1,
              px: 3,
              borderRadius: 1,
            }}
          >
            External Links
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
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
                >
                  GitHub
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Button
                  color="primary"
                  component="a"
                  href="https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?tab=t.0"
                  target="_blank"
                  variant="contained"
                  rel="noopener noreferrer"
                  fullWidth
                  size="large"
                >
                  My Resume
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
