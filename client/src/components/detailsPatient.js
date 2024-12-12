// // import React, { useEffect, useState } from 'react';
// // import { useParams, Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import Notification from './Notification';

// // const BACKEND_API_URL = process.env.BACKEND_API_URL;
// // console.log(BACKEND_API_URL)

// // const PatientDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [patient, setPatient] = useState(null);
// //   const [showNotification, setShowNotification] = useState(null);

// //   useEffect(() => {
// //     const fetchPatient = async () => {
// //       try {
// //         console.log('Fetching patient data...');
// //         const response = await axios.get(`${BACKEND_API_URL}/${id}`);
// //         console.log('Patient data:', response.data);
// //         setPatient(response.data);
// //       } catch (error) {
// //         console.error('Error fetching patient:', error.response || error.message);
// //         setShowNotification({ type: 'error', text: 'Error loading patient details.' });
// //       }
// //     };
// //     fetchPatient();
// //   }, [id]);

// //   const deletePatient = async () => {
// //     try {
// //       await axios.delete(`${BACKEND_API_URL}/${id}`);
// //       setShowNotification({ type: 'success', text: 'Patient deleted successfully!' });
// //       setTimeout(() => navigate('/'), 1000); // Navigate after showing notification for 3 seconds
// //     } catch (error) {
// //       console.error('Error deleting patient:', error);
// //       setShowNotification({ type: 'error', text: 'Error deleting patient.' });
// //     }
// //   };

// //   const handleCloseNotification = () => {
// //     setShowNotification(null);
// //   };

// //   if (!patient && !showNotification) {
// //     return <div className="box-container">Loading...</div>;
// //   }

// //   if (!patient && showNotification) {
// //     return <div className="box-container">Error loading patient details.</div>;
// //   }

// //   return (
// //     <div className="box-container" style={{}}>
// //       <h1>{patient.name}</h1>
// //       <div className="patient-info">
// //         <p>Age: {patient.age}</p>
// //       </div>
// //       <div className="patient-actions">
// //         <Link to={`/edit/${patient.id}`} className="btn btn-update">Edit</Link>
// //         <button onClick={deletePatient} className="btn btn-delete">Delete</button>
// //         <Link to="/" className="btn btn-back">Back to Home</Link>
// //       </div>
// //       {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
// //     </div>
// //   );
// // };

// // export default PatientDetail;

// // src/components/ShowBookList.js


import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DetailsPatient = () => {
  const [patients, setPatients] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect( () => {
     axios
    .get('https://5000-nirmal3002-clinicmgmt-u8iv2dgoy2d.ws-us117.gitpod.io/api/clinics')

     .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });  
  }, [id]);
  
  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`/api/patient/${id}`)
      .then((res) => {
        navigate('/patient-list');
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails_deleteClick');
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      {(patients && patients?.length <= 0) ? "No patient found" : 
      patients.map((patient,index)=>(
        <StyledPaper key={index}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt={patient.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {patient.id}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              by {patient.name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            {/* Display book details one after another */}
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>
                {patient.description}
              </Typography>
              <Typography variant="body1">ID: {patient._id}</Typography>
              <Typography variant="body1">Name: {patient.name}</Typography>
              <Typography variant="body1">Age: {patient.age}</Typography>
              <Typography variant="body1">Gender: {patient.gender}</Typography>
              <Typography variant="body1">Contact_number: {patient.contact_number}</Typography>
              <Typography variant="body1">Admit: {patient.admit ? "Yes" : "No"}</Typography>
              <Typography variant="body1">Admit date: {patient.admit_date}</Typography>
            </Box>

          </Grid>
        </Grid>
        
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/list"
            variant="outlined"
          >
            Back to person List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit/${patient._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Book
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Book
            </Button>
          </Box>
        </Box>
      </StyledPaper>
      ))}

      {/* Keep the dialog unchanged */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this book? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default  DetailsPatient;