import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

// Ensure this value is correctly defined in your .env file
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

const PatientAdd = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [co_number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [showNotification, setShowNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !age || !co_number || !gender) {
      setShowNotification({
        type: 'error',
        text: 'All fields are required.',
      });
      return;
    }

    try {
      // Make API POST request
      const response = await axios.post(`${BACKEND_API_URL}/clinics`, {
        name,
        age,
        gender,
        co_number,
      });

      const newPatientId = response.data.id;

      // Reset form fields
      setName('');
      setAge('');
      setGender('');
      setNumber('');

      // Show success notification
      setShowNotification({
        type: 'success',
        text: `Patient "${response.data.name}" added successfully!`,
      });

      // Navigate to patient details page after success
      setTimeout(() => navigate(`/detail/${newPatientId}`), 1000);
    } catch (error) {
      console.error('Error adding patient:', error);
      setShowNotification({
        type: 'error',
        text: 'Failed to add the patient. Please try again.',
      });
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(null);
  };

  return (
    <div className="box-container">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder="Contact Number"
          value={co_number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="input-field"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="input-field"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <div className="button-group">
          <button type="submit" className="btn btn-add">
            Add Patient
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
      {showNotification && (
        <Notification
          message={showNotification}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default PatientAdd;
