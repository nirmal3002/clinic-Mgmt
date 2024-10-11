import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL);

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
    <div className="box-container">
      <h1>All Patient List</h1>
      <Link to="/add" className="btn btn-add add-person-button">Add Patient</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th> </th>
            <th>Age</th>
            <th> </th>
            <th>Contact No</th>
            <th> </th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {patient.map(patient => (<tr key={patient.id} className="person-name"><td>
                <Link to={`/patients/${patient.id}`}>{patient.name}</Link></td>
                <td> </td>
              <td>{patient.age}</td>
              <td> </td>
              <td>{patient.co_number}</td>
              <td> </td>
              <td>{patient.gender}</td>
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