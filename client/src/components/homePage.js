
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Box } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';

// const HomePage = () => {
//     return (
//      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
//         <Typography variant="h2" component="h1" color="success">
//           Welcome to the Clinic Management System
//         </Typography>
//         <Typography variant="h5" gutterBottom>
//           Manage Patients Efficiently
//         </Typography>
//         <Box mt={4}>
//         <Button component={Link} to="/list" color="primary" 
//           variant="contained" >
//           View Patients
//         </Button>
//         <Button component={Link} to="/export" color="primary" 
//           variant="contained" >
//           Download Patients-list
//         </Button>
//         <Button
//               color="primary"
//               component="a"
//               href="https://github.com/nirmal3002/clinic-Mgmt"
//               target="_blank"
//                variant="contained"
//               rel="noopener noreferrer"
//              >
//               <GitHubIcon />
//               GitHub
//               </Button>
//               <Button
//               color="primary"
//               component="a"
//               href="https://docs.google.com/document/d/1951CLEB80bJ5kHb3fJa355BsURLlvO9wbkWmdBRDtbk/edit?tab=t.0"
//               target="_blank"
//                variant="contained"
//               rel="noopener noreferrer"
//              >
//               My Resume
//              </Button>

//       </Box>
//        </Container>
//   );
// };

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => {
  return (
    
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
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

