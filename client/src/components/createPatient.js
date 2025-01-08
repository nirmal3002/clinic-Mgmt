import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const CreatePatient = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    contact_number: '',
    admit: '',
    admit_date: '',
    medical_history: '',
  });

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://clinic-management-0q8q.onrender.com/api/clinics', patient)
      .then(() => {
        setPatient({
          name: '',
          age: '',
          gender: '',
          contact_number: '',
          admit: '',
          admit_date: '',
          medical_history: '',
        });
        toast.success('Patient added successfully!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
          transition: Slide,
        });
        navigate('/');
      })
      .catch((err) => {
        console.error('Error in creating patient:', err);
        toast.error('Something went wrong, try again!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <ToastContainer />
      <Typography variant="h4" component="h1" color="primary" gutterBottom align="center">
        Add New Patient
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Fill in the details below to create a new patient record.
      </Typography>
      <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              required
              value={patient.name}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="age"
              label="Age"
              type="number"
              fullWidth
              required
              value={patient.age}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={patient.gender}
                onChange={onChange}
                variant="outlined"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="contact_number"
              label="Contact Number"
              fullWidth
              required
              value={patient.contact_number}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Admitted Before?</InputLabel>
              <Select
                name="admit"
                value={patient.admit}
                onChange={onChange}
                variant="outlined"
              >
                <MenuItem value="true">Yes</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="admit_date"
              label="Admit Date"
              type="date"
              fullWidth
              required
              value={patient.admit_date}
              onChange={onChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="medical_history"
              label="Medical History"
              fullWidth
              required
              value={patient.medical_history}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">
              Add Patient
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate('/')}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CreatePatient;
