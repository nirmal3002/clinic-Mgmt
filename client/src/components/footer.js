import React from 'react';
// import { Box, Typography } from '@mui/material';
// import CallIcon from '@mui/icons-material/Call';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { GitHub, LinkedIn, Instagram, Facebook } from '@mui/icons-material';
import { Box, Typography, Grid, Divider, Link, Container } from '@mui/material';


const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      width: '100%',
      textAlign: 'center',
      borderTop: (theme) => `1px solid ${theme.palette.primary.main}`, // Optional: add a top border
    }}
  >
    <Typography variant="h6" gutterBottom>
      Built by Nirmal
    </Typography>

    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          position: 'relative',

        }}
      >
    <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="inherit">
              Email: support@clinic.com
            </Typography>
            <Typography variant="body2" color="inherit">
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" color="inherit">
              Address: 1234 Health St, Wellness City, 56789
            </Typography>
          </Grid>
          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <Link
                component="a"
                href="https://github.com/88chinu/clinicManagement"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <GitHub />
              </Link>
              <Link
                component="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <LinkedIn />
              </Link>
              <Link
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <Instagram />
              </Link>
              <Link
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <Facebook />
              </Link>
            </Box>
          </Grid>
          {/* About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="inherit">
              We provide a seamless platform to manage your health records, doctor's appointments, and much more.
            </Typography>
            <Typography variant="body2" color="inherit" mt={2}>
              <b>Our Mission:</b> To empower healthcare providers with technology that makes patient management easier and more efficient.
            </Typography>
          </Grid>
    
        <Divider sx={{ my: 4, bgcolor: 'primary.light' }} />

{/* Copyright */}
<Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
  © 2025 Patient Management System | All rights reserved
</Typography>

</Grid>

          </Container>

      </Box>
    </Box>
        

  </Box>
);

export default Footer;
