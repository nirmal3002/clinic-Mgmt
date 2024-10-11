// src/components/PersonEdit.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Notification from './Notification';

// import '../styles/PersonEdit.css'; // Component-specific styles

const API_URL = process.env.REACT_APP_API_URL;

const Patientupdate= () => {

const { id } = useParams();
const navigate = useNavigate();
const [patient, setPatient] = useState({ name: '', age: '' , co_number: '' , gender: '' });
// const [showNotification,setShowNotification] = useState(null)

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching person:', error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, patient);
      navigate(`/detail/${id}`); // Redirect to person details page after update
    //   setShowNotification({ type: 'success', text: `Patient "${response.data.name}" updated successfully!` });
    } catch (error) {
      console.error('Error updating person:', error);
    //   setShowNotification({ type: 'error', text: 'Failed to update the patient. Please try again.' });

    }
 
    
  };
//   const handleCloseNotification = () => {
//     setShowNotification(null);
//   };

  const handleCancel = () => {
    navigate(`/detail/${id}`); // Navigate back to the person details page
  };

  const handleHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="box-container">
      <h1>Edit Person</h1>
      <form onSubmit={handleUpdate} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={patient.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
          required
          className="input-field"
        />
          <input
          type="string"
          name="co-number"
          placeholder="contact-number"
          value={patient.co_number}
          onChange={handleChange}
          required
          className="input-field"
        />
          <input
          type="text"
          name="gender"
          placeholder="gender"
          value={patient.gender}
          onChange={handleChange}
          required
          className="input-field"
        />
        <div className="person-actions">
          <button type="submit" className="btn btn-update">Update</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn btn-back" onClick={handleHome}>Back to Home</button>
        </div>
      </form>
    </div>
  );
};

export default Patientupdate;