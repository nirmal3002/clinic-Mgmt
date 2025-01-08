import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Pagination,
} from '@mui/material';
import PatientCard from './patientCard'; // Assumes PatientCard handles individual patient rendering

const ShowPersonList = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 6; // Patients displayed per page

  // const URL=process.env.REACT_API_AXIOS_URL;

  useEffect(() => {
    axios
      .get(`https://clinic-management-0q8q.onrender.com/api/clinics`)
      .then((res) => {
        setPatients(res.data);
        setFilteredPatients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching patient data:', err);
        setError('Failed to fetch patient data. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredPatients(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(query)
      )
    );
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Pagination logic
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Patient List
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <TextField
            label="Search Patients"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            component={Link}
            to="/add"
            color="primary"
            variant="contained"
            fullWidth
          >
            Add New Patient
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <Grid container spacing={4}>
            {currentPatients.map((patient) => (
              <Grid item xs={12} sm={6} md={4} key={patient.id}>
                <PatientCard patient={patient} />
              </Grid>
            ))}
          </Grid>

          {filteredPatients.length > patientsPerPage && (
            <Pagination
              count={Math.ceil(filteredPatients.length / patientsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ mt: 4 }}
              color="primary"
              shape="rounded"
            />
          )}
        </>
      )}
    </Container>
  );
};

export default ShowPersonList;
