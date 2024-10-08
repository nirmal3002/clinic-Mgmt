

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

const PatientList = () => {
  const [patient, setPatient] = useState([]);
  const [notification, setNotification] = useState('');
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(API_URL);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };
    fetchPatient();
  }, []);
  return (
    <div>
      <h1>All Patient List</h1>
      <Link to="/add">Add Patient</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {patient.map(patient => (
            <tr key={patient.id}>
              <td>
                <Link to={`/patient/${patient.id}`}>
                  {patient.name}
                </Link>
              </td>
              <td>{patient.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
    </div>
  );
};

export default PatientList;