// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import Notification from './Notification';
// import { colors } from '@mui/material';

// const API_URL = process.env.REACT_APP_API_URL
// console.log(API_URL);

// const PatientList = () => {
//   const [patient, setPatient] = useState([]);
//   const [notification, setNotification] = useState('');

//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setPatient(response.data);
//       } catch (error) {
//         console.error('Error fetching patient:', error);
//       }
//     };
//     fetchPatient();
//   }, []);

//   return (
//     <div className="box-container">
//       <h1 style={{fontFamily:"roboto"}}>All Patient List</h1>
//       <Link to="/add" className="btn btn-add add-person-button">Add Patient</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th> </th>
//             <th>Age</th>
//             <th> </th>
//             <th>Contact No</th>
//             <th> </th>
//             <th>Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patient.map(patient => (<tr key={patient.id} className="person-name"><td>
//                 <Link to={`/patients/${patient.id}`}>{patient.name}</Link></td>
//                 <td> </td>
//               <td>{patient.age}</td>
//               <td> </td>
//               <td>{patient.co_number}</td>
//               <td> </td>
//               <td>{patient.gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {notification && (
//         <Notification message={notification} onClose={() => setNotification('')} />
//       )}
//     </div>
//   );
// };

// export default PatientList;


// src/components/ShowBookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Typography,
  Container,
  Grid,

} from '@mui/material';
import PatientCard from './patientCard';
 // Ensure this handles patient props correctly

function ShowpersonList() {
  const [patients, setPatients] = useState([]); // Updated naming to "patients"
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axios
      .get('https://5000-nirmal3002-clinicmgmt-u8iv2dgoy2d.ws-us117.gitpod.io/api/clinics') // Fetch patient data
      .then((res) => {
        setPatients(res.data); // Populate patients
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        console.error('Error from ShowPatientList:', err);
        setError('Failed to fetch patient data. Please try again later.');
        setLoading(false); // Set loading to false
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Patient List
      </Typography>

      <Button
        component={Link}
        to="/add"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }} >
        Add New Patient
      </Button>
      {patients.map((patient,index) => (
                            
                     <Grid item xs={12} sm={6} md={4} key={index}>                  
  <PatientCard patient={patient} />
        </Grid>
      ))}

    </Container>
  );
}

export default ShowpersonList;
