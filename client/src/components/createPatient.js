import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL

const PatientAdd = ({ onPatientAdd = () => { } }) => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [co_number,setNumber] = useState('')
    const [gender,setGender] = useState('')
    const navigate = useNavigate()
    const [showNotification,setShowNotification] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !age || !co_number || !gender) return

        try {
            const response = await axios.post(API_URL, { name, age, gender, co_number });
            const newPatientId = response.data.id;
            
            // Clear form fields
            setName('');
            setAge('');
            setGender('');
            setNumber('');
      
            // Show success notification
            setShowNotification({ type: 'success', text: `Patient "${response.data.name}" added successfully!` });
      
            // Navigate to the new person's detail page
            setTimeout(() => navigate(`/detail/${newPatientId}`), 1000); // Wait for 1 seconds before navigating
          } catch (error) {
            console.error('Error adding the patient:', error);
            setShowNotification({ type: 'error', text: 'Failed to add the patient. Please try again.' });
          }
        };
      
        const handleCloseNotification = () => {
          setShowNotification(null);
        };
      
      
        return (
          <div className="box-container">
            <h2>Add Patient</h2>
            <form onSubmit={handleSubmit} className="form-container">

              <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} required className="input-field"/>

              <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required className="input-field" />

              <input type="number" placeholder="contact-number" value={co_number} onChange={(e) => setNumber(e.target.value)} required className="input-field" />

              <select type='select' placeholder="Select Gender" name="Sgender" value={gender} onChange={(e) => setGender(e.target.value)} required className='input-field'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option> </select>

              <div className="button-group">
                <button type="submit" className="btn btn-add">Add Patient</button>
                <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
              </div>
            </form>
            {showNotification && <Notification message={showNotification} onClose={handleCloseNotification} />}
          </div>
        );
      };
      
      export default PatientAdd;