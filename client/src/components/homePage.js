


// Import required libraries
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  CircularProgress,
  Button,
} from '@mui/material';
import {
  Note as NotesIcon,
  Add as AddIcon,
  Download as DownloadIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  CalendarToday as CalendarTodayIcon,
  Search as SearchIcon,
  GitHub as GitHubIcon,
  QrCode as QrCodeIcon,
} from '@mui/icons-material';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const HomePage = () => {
  const [stats, setStats] = useState({
    totalpatients: 0,
    uniqueNames: 0,
    recentPatient: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${URL}/api/clinics`)
      .then((res) => {
        const patients = res.data;
        const uniqueNames = new Set(patients.map((patient) => patient.author)).size;
        const recentPatient = patients.sort(
          (a, b) => new Date(b.admit_date) - new Date(a.admit_date)
        )[0];
        setStats({
          totalpatients: patients.length,
          uniqueNames,
          recentPatient,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1505150892987-424388e028ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8fHwxNjc1ODc4MjQx&ixlib=rb-1.2.1&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 6 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Welcome to Clinic Management System
          </Typography>
          <Typography
            variant="h6"
            mb={4}
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}
          >
            Streamline your patient management with our modern and efficient platform.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/list"
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '25px',
                padding: '12px 30px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={4} mb={6} sx={{ px: 2 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <GroupIcon
                  sx={{
                    fontSize: 60,
                    mb: 2,
                    color: 'rgba(255, 255, 255, 0.8)',
                    background: 'linear-gradient(145deg, #29B6F6, #0288D1)',
                    borderRadius: '50%',
                    padding: 2,
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                  {stats.totalpatients}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  Total Patients
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <PersonIcon
                  sx={{
                    fontSize: 60,
                    mb: 2,
                    color: 'rgba(255, 255, 255, 0.8)',
                    background: 'linear-gradient(145deg, #66BB6A, #388E3C)',
                    borderRadius: '50%',
                    padding: 2,
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                  {stats.uniqueNames}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  Unique Patient Names
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <CalendarTodayIcon
                  sx={{
                    fontSize: 60,
                    mb: 2,
                    color: 'rgba(255, 255, 255, 0.8)',
                    background: 'linear-gradient(145deg, #FFD54F, #FFCA28)',
                    borderRadius: '50%',
                    padding: 2,
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                  {stats.recentPatient?.Name || 'No recent patients'}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  Most Recent Patient
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" gutterBottom>
            Explore Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[{
              label: 'Add Patient',
              icon: <AddIcon />,
              link: '/add',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',              
              style: { border: '2px solid #FFDAB9' }, // Peach border
            },
            {
              label: 'View Patients',
              icon: <GroupIcon />,
              link: '/list',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              style: { border: '2px solid #FFDAB9' }, // Peach border
            },
            {
              label: 'Search Patient',
              icon: <SearchIcon />,
              link: '/search',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              style: { border: '2px solid #FFDAB9' }, // Peach border
            },
            {
              label: 'Export List',
              icon: <DownloadIcon />,
              link: '/export',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              style: { border: '2px solid #FFDAB9' }, // Peach border
            },
            {
              label: 'Show QR Code',
              icon: <QrCodeIcon />,
              link: '/scan',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              style: { border: '2px solid #FFDAB9' }, // Peach border
            },

            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    background: feature.color,
                    color: 'white',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ background: 'transparent', boxShadow: 'none' }}
                    component={Link}
                    to={feature.link}
                  >
                    {feature.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {feature.label}
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* External Links Section */}
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            External Links
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                label: 'GitHub',
                icon: <GitHubIcon />,
                link: 'https://github.com/nirmal3002/clinic-Mgmt',
                backgroundColor: '#ffc3a0',
              },
              {
                label: 'View Patients',
                icon: <NotesIcon />,
                link: 'https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?tab=t.0',
                Color: '#ffc3a0',
              },
            ].map((externalLink, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    background: externalLink.color,
                    color: 'white',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ background: 'transparent', boxShadow: 'none' }}
                    href={externalLink.link}
                    target="_blank"
                  >
                    {externalLink.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {externalLink.label}
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;