import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PatientCard = ({ patient }) => {
  // Check if patient is valid
  if (!patient || typeof patient !== 'object') {
    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
          marginBottom: '10px',
        }}
      >
        <Typography variant="h6" color="text.secondary">
          No Patient Data Available
        </Typography>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
        marginBottom: '10px',
      }}
    >
      <img
        src="https://img.freepik.com/premium-photo/3d-add-user-icon-create-group-symbol-new-profile-account-people-icon-plus-avatar-human-person-people-icon-trendy-modern-vector-3d-style_839035-1753845.jpg"
        alt="Patient"
        style={{
          height: 200,
          objectFit: 'cover',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          <Link
            to={`/show-patient/${patient._id || ''}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {patient.name || 'Unknown Name'}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Age: {patient.age || 'N/A'}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Gender: {patient.gender || 'N/A'}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Contact: {patient.contact_number || 'N/A'}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Admit: {patient.admit || 'N/A'}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/detail/${patient._id || ''}`}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          disabled={!patient._id}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default PatientCard;
