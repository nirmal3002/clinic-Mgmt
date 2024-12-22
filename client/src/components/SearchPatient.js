import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PatientCard from './patientCard';
import axios from 'axios';
const SearchPatient = () => {
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [names, setNames] = useState([]);
    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'name',
        sortBy: 'name',
        sortOrder: 'asc',
        name: 'all'
    });
    useEffect(() => {
        axios.get('https://clinic-management-0q8q.onrender.com/api/clinics')
            .then(res => {
                setPatients(res.data);
                setFilteredPatients(res.data);
                // Extract unique publishers
                const uniqueNames = [...new Set(res.data.map(patient => patient.name))];
                setNames(uniqueNames);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching patients:', err);
                setLoading(false);
            });
    }, []);
    const applyFilters = () => {
        let result = [...patients];
  
    // Apply search
    if (filters.searchTerm) {
        result = result.filter(patient => {
            const searchValue = patient[filters.searchField]?.toString().toLowerCase();
            return searchValue?.includes(filters.searchTerm.toLowerCase());
        });
        setFilteredPatients(result);
    };
}
    useEffect(() => {
        applyFilters();
    }, [filters]);
    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'name',
            sortBy: 'name',
            sortOrder: 'asc',
            name: 'all'
        });
    };
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }
    return (

        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                Search Patient
            </Typography>

            {/* Search and Filter Section */}
            <Card sx={{ mb: 4, p: 2 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Search Field */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Search"
                                value={filters.searchTerm}
                                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<RestartAltIcon />}
                                    onClick={resetFilters}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

             {/* Results Section */}
             <Box sx={{ mb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                    Found {filteredPatients.length} patients
                </Typography>
            </Box>

            {/* Books Grid */}
            <Grid container spacing={3}>
                {filteredPatients.map((patient) => (
                    <Grid item xs={12} sm={6} md={4} key={patient._id}>
                        <PatientCard book={patient} />
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
};
export default SearchPatient;
