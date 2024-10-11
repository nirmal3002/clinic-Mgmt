import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const PatientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [showNotification, setShowNotification] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        console.log('Fetching patient data...');
        const response = await axios.get(`${API_URL}/${id}`);
        console.log('Patient data:', response.data);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient:', error.response || error.message);
        setShowNotification({ type: 'error', text: 'Error loading patient details.' });
      }
    };
    fetchPatient();
  }, [id]);

  const deletePatient = async () => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setShowNotification({ type: 'success', text: 'Patient deleted successfully!' });
      setTimeout(() => navigate('/'), 1000); // Navigate after showing notification for 3 seconds
    } catch (error) {
      console.error('Error deleting patient:', error);
      setShowNotification({ type: 'error', text: 'Error deleting patient.' });
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(null);
  };

  if (!patient && !showNotification) {
    return <div className="box-container">Loading...</div>;
  }

  if (!patient && showNotification) {
    return <div className="box-container">Error loading patient details.</div>;
  }

  return (
    <div className="box-container">
      <h1>{patient.name}</h1>
      <div className="patient-info">
        <p>Age: {patient.age}</p>
      </div>
      <div className="patient-actions">
        <Link to={`/edit/${patient.id}`} className="btn btn-update">Edit</Link>
        <button onClick={deletePatient} className="btn btn-delete">Delete</button>
        <Link to="/" className="btn btn-back">Back to Home</Link>
      </div>
      {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
    </div>
  );
};

export default PatientDetail;