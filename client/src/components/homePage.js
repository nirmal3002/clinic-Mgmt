// // import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Box, Grid, Paper,Card,CardContent,CircularProgress} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DownloadIcon from '@mui/icons-material/Download';
// import GroupIcon from '@mui/icons-material/Group';
// import PersonIcon from '@mui/icons-material/Person';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import QrCodeIcon from '@mui/icons-material/QrCode';
// import SearchIcon from '@mui/icons-material/Search';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import axios from 'axios';
// const HomePage = () => {
//   const [stats, setStats] = useState({
//     totalpatients: 0,
//     uniqueNames: 0,
//     recentPatient: null
//   });
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios.get( `https://clinic-management-0q8q.onrender.com/api/clinics`)
//       .then(res => {
//         const patients = res.data;
//         const  uniqueNames = new Set(patients.map(patient => patient.author)).size;
//         const recentPatient = patients.sort((a, b) =>
//           new Date(b. admit_date) - new Date(a. admit_date)
//         )[0];
//         setStats({
//           totalpatients: patients.length,
//           uniqueNames,
//           recentPatient
//         });
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching stats:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         width: '100%',
//         overflow: 'hidden',
//         backgroundImage:
//           'url(https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=1024x1024&w=gi&k=20&c=2nU8Ac2_g9NiiRTgZXfBqSRx50tR4x8R7io7X1OCUFg=)',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       {/* Overlay for better text visibility */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
//         }}
//       />


//       {/* Content */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           position: 'relative',
//           zIndex: 1,
//           textAlign: 'center',
//           py: 5,
//           color: 'white',
//         }}
//       > 
//             {/* Welcome Section */}

//       <Box
//       sx={{
//         py: 4,
//         px: 2,
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         borderRadius: 2,
//         display: 'inline-block',
//       }}
//     >
//       <Typography variant="h2" component="h1" gutterBottom>
//         Welcome to the Clinic Management System
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Manage patients efficiently and effectively with our intuitive platform.
//       </Typography>
//     </Box>

//     <Grid container spacing={4} mb={6}>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//               <CardContent sx={{ textAlign: 'center', width: '100%' }}>
//                 <GroupIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//                 <Typography variant="h4" gutterBottom>
//                   {stats.totalpatients}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   Total Patients
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//               <CardContent sx={{ textAlign: 'center', width: '100%' }}>
//                 <PersonIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//                 <Typography variant="h4" gutterBottom>
//                   {stats.uniqueNames}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   Unique Patient Name
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//               <CardContent sx={{ textAlign: 'center', width: '100%' }}>
//                 <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//                 <Typography variant="h4" gutterBottom>
//                   Latest Book
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   {stats.recentPatient?.Name || 'No books yet'}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//         {/* Features Section */}
//         <Box sx={{ my: 6 }}>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{
//               backgroundColor: 'rgba(255, 255, 255, 0.8)',
//               color: 'black',
//               display: 'inline-block',
//               py: 1,
//               px: 3,
//               borderRadius: 1,
//             }}
//           >
//             Features
//           </Typography>
//           <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   component={Link}
//                   to="/list"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   size="large"
//                   startIcon={<GroupIcon/>}
//                 >
//                   View Patients
//                 </Button>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   component={Link}
//                   to="/search"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   size="large"
//                   startIcon={<SearchIcon />}
//                 >
//                   Search Patient
//                 </Button>
//               </Paper>
//             </Grid>
            
//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   component={Link}
//                   to="/export"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   size="large"
//                   startIcon={<DownloadIcon />}
//                 >
//                   Download Patients List
//                 </Button>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   component={Link}
//                   to="/add"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   size="large"
//                   startIcon={<AddIcon/>}
//                 >
//                   Add Patients 
//                 </Button>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   component={Link}
//                   to="/export"
//                   color="primary"
//                   variant="contained"
//                   fullWidth
//                   size="large"
//                   startIcon={<QrCodeIcon/>}
//                 >
//                  Show Qr Code
//                 </Button>
//               </Paper>
//             </Grid>

//           </Grid>
//         </Box>

//         {/* External Links Section */}
//         <Box sx={{ my: 6 }}>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{
//               backgroundColor: 'rgba(255, 255, 255, 0.8)',
//               color: 'black',
//               display: 'inline-block',
//               py: 1,
//               px: 3,
//               borderRadius: 1,
//             }}
//           >
//             External Links
//           </Typography>
//           <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   color="primary"
//                   component="a"
//                   href="https://github.com/nirmal3002/clinic-Mgmt"
//                   target="_blank"
//                   variant="contained"
//                   rel="noopener noreferrer"
//                   startIcon={<GitHubIcon />}
//                   fullWidth
//                   size="large"
//                 >
//                   GitHub
//                 </Button>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 }}
//               >
//                 <Button
//                   color="primary"
//                   component="a"
//                   href="https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?tab=t.0"
//                   target="_blank"
//                   variant="contained"
//                   rel="noopener noreferrer"
//                   fullWidth
//                   size="large"
//                 >
//                   My Resume
//                 </Button>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HomePage;


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

const HomePage = () => {
  const [stats, setStats] = useState({
    totalpatients: 0,
    uniqueNames: 0,
    recentPatient: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://clinic-management-0q8q.onrender.com/api/clinics')
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
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
              <CardContent textAlign="center">
                <GroupIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h4">{stats.totalpatients}</Typography>
                <Typography variant="subtitle1">Total Patients</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
              <CardContent textAlign="center">
                <PersonIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h4">{stats.uniqueNames}</Typography>
                <Typography variant="subtitle1">Unique Patient Names</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
              <CardContent textAlign="center">
                <CalendarTodayIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h4">
                  {stats.recentPatient?.Name || 'No recent patients'}
                </Typography>
                <Typography variant="subtitle1">Most Recent Patient</Typography>
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
            {[
               {
                label: 'Add Patient',
                icon: <AddIcon />,
                link: '/add',
                color: 'linear-gradient(45deg, #FF5722 30%, #FF7043 90%)', // Warm orange shades
              },
               {
                label: 'View Patients',
                icon: <GroupIcon />,
                link: '/list',
                color: 'linear-gradient(45deg, #0288D1 30%, #03A9F4 90%)', // Cool blue shades
              },
              {
                label: 'Search Patient',
                icon: <SearchIcon />,
                link: '/search',
                color: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)', // Soft green shades
              },
             
              {
                label: 'Export List',
                icon: <DownloadIcon />,
                link: '/export',
                color: 'linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)', // Vibrant yellow shades
              },
              {
                label: 'Show QR Code',
                icon: <QrCodeIcon />,
                link: '/qr',
                color: 'linear-gradient(45deg, #FFC107 30%, #FFD54F 90%)', // Elegant purple shades
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
                color: 'linear-gradient(45deg, #AB47BC 30%, #8E24AA 90%)',
              },
              {
                label: 'View Patients',
                icon: <NotesIcon />,
                link: 'https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?tab=t.0',
                color: 'linear-gradient(45deg, #AB47BC 30%, #8E24AA 90%)',
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