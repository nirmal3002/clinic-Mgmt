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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DetailsPatient = () => {
  const [patient, setPatient] = useState(null); // Single patient state
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams(); // Patient ID from URL
  const navigate = useNavigate();

  // const URL=process.env.REACT_API_AXIOS_URL;

  // Fetch patient details
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `https://clinic-management-0q8q.onrender.com/api/clinics/${id}`
        );
        setPatient(response.data);
      } catch (err) {
        console.error('Error fetching patient:', err);
        setPatient(null); // Set to null if not found or error occurs
      }
    };
    fetchPatient();
  }, [id]);

  // Handle delete actions
  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`https://clinic-management-0q8q.onrender.com/api/clinics/${id}`);
      navigate('/list'); // Redirect to patient list after deletion
    } catch (err) {
      console.error('Error deleting patient:', err);
    }
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  // Handle loading and error states
  if (!patient) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" color="error">
          Patient not found or an error occurred.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMW5UU80_o8UjZE1F5KC9pCjfDxtHezwQtaA&s"
                alt={patient.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {patient.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {patient.id}
            </Typography>
            <Divider sx={{ my: 2 }} />

            {/* Display patient details */}
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>
                {patient.description}
              </Typography>
              <Typography variant="body1">ID: {patient._id}</Typography>
              <Typography variant="body1">Name: {patient.name}</Typography>
              <Typography variant="body1">Age: {patient.age}</Typography>
              <Typography variant="body1">Gender: {patient.gender}</Typography>
              <Typography variant="body1">
                Contact Number: {patient.contact_number}
              </Typography>
              <Typography variant="body1">Admit: {patient.admit ? 'Yes' : 'No'}</Typography>
              <Typography variant="body1">Admit Date: {patient.admit_date}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/patient-list"
            variant="outlined"
          >
            Back to Patient List
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
              Edit Patient
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Patient
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Confirm Delete Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Deletion'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this patient? This action cannot be
            undone.
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

export default DetailsPatient;
