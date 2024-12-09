import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PatientCard = ({ patient }) => {
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
      }}
    >
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        style={{ height: 200, objectFit: 'cover', width: '100%' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" color="primary" gutterBottom>
          <Link to={`/show-book/${patient._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {patient.name}
          </Link>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {patient.age}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {patient.gender}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {patient.co_number}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {patient.admit}
        </Typography>
       
      </CardContent>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Button
          component={Link}
          to={`/detail/${patient._id}`}
          variant="contained"
          color="primary"
          size="small"
          fullWidth
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default PatientCard;