// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid, Paper,Card,CardContent,CircularProgress} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
const HomePage = () => {
  const [stats, setStats] = useState({
    totalpatients: 0,
    uniqueNames: 0,
    recentPatient: null
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get( `https://clinic-management-0q8q.onrender.com/api/clinics`)
      .then(res => {
        const patients = res.data;
        const  uniqueNames = new Set(patients.map(patient => patient.author)).size;
        const recentPatient = patients.sort((a, b) =>
          new Date(b. admit_date) - new Date(a. admit_date)
        )[0];
        setStats({
          totalpatients: patients.length,
          uniqueNames,
          recentPatient
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }
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

    <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <GroupIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalpatients}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Patients
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <PersonIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.uniqueNames}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Unique Patient Name
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Latest Book
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.recentPatient?.Name || 'No books yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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
                  startIcon={<GroupIcon/>}
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
                  to="/add"
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<AddIcon/>}
                >
                  Add Patients 
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
                  startIcon={<QrCodeIcon/>}
                >
                 Show Qr Code
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
