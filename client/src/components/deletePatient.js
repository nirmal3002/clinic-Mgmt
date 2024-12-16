import React from 'react';
import axios from 'axios';

const DeletePerson = ({ id, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        // Replace the endpoint with your actual API endpoint
        const response = await axios.delete(
          `https://5000-nirmal3002-clinicmgmt-u8iv2dgoy2d.ws-us117.gitpod.io/api/clinics/${id}`
        );
        if (response.status === 200 || response.status === 204) {
          onDelete(id); // Inform parent component about successful deletion
        } else {
          console.error('Unexpected response while deleting:', response);
        }
      } catch (error) {
        console.error('Error deleting patient:', error);
        alert('An error occurred while trying to delete the patient.');
      }
    }
  };

  return (
    <button className="btn btn-delete" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeletePerson;
