import React from 'react';
import { Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';

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
        }}
      >
        {/* Call Link */}
        <Box component="a" href="tel:+1234567890" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <CallIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          <Typography variant="body1" component="span">
            +1 234 567 890
          </Typography>
        </Box>

        {/* Facebook Link */}
        <Box component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <FacebookIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          <Typography variant="body1" component="span">
            Facebook
          </Typography>
        </Box>
      </Box>
    </Box>

    <Typography variant="body2" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Bsc Cohort | All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;
