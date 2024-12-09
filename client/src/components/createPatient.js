// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Notification from './Notification';

// // Ensure this value is correctly defined in your .env file
// const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

// const PatientAdd = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [co_number, setNumber] = useState('');
//   const [gender, setGender] = useState('');
//   const [showNotification, setShowNotification] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate input fields
//     if (!name || !age || !co_number || !gender) {
//       setShowNotification({
//         type: 'error',
//         text: 'All fields are required.',
//       });
//       return;
//     }

//     try {
//       // Make API POST request
//       const response = await axios.post(`${BACKEND_API_URL}/clinics`, {
//         name,
//         age,
//         gender,
//         co_number,
//       });

//       const newPatientId = response.data.id;

//       // Reset form fields
//       setName('');
//       setAge('');
//       setGender('');
//       setNumber('');

//       // Show success notification
//       setShowNotification({
//         type: 'success',
//         text: `Patient "${response.data.name}" added successfully!`,
//       });

//       // Navigate to patient details page after success
//       setTimeout(() => navigate(`/detail/${newPatientId}`), 1000);
//     } catch (error) {
//       console.error('Error adding patient:', error);
//       setShowNotification({
//         type: 'error',
//         text: 'Failed to add the patient. Please try again.',
//       });
//     }
//   };

//   const handleCloseNotification = () => {
//     setShowNotification(null);
//   };

//   return (
//     <div className="box-container">
//       <h2>Add Patient</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="input-field"
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//           className="input-field"
//         />
//         <input
//           type="number"
//           placeholder="Contact Number"
//           value={co_number}
//           onChange={(e) => setNumber(e.target.value)}
//           required
//           className="input-field"
//         />
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//           className="input-field"
//         >
//           <option value="" disabled>
//             Select Gender
//           </option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <div className="button-group">
//           <button type="submit" className="btn btn-add">
//             Add Patient
//           </button>
//           <button
//             type="button"
//             className="btn btn-cancel"
//             onClick={() => navigate('/')}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//       {showNotification && (
//         <Notification
//           message={showNotification}
//           onClose={handleCloseNotification}
//         />
//       )}
//     </div>
//   );
// };

// export default PatientAdd;



//the updated code for createPatient

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreatePatient = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    co_number: '',
    admit: '',
    admit_date: '',
    medical_history: '',
  });

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(patient)
    axios
      .post('/api/clinics', patient)
      .then((res) => {
        setPatient({
          name: '',
          age: '',
          gender: '',
          co_number: '',
          admit: '',
          admit_date: '',
          medical_history: '',
        });
        toast.success('Patient added successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          transition: Slide,
        });
        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in creating patient:', err);
        toast.error('Something went wrong, try again!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <div className="CreatePatient">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Patient List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Patient</h1>
            <p className="lead text-center">Create new patient details</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={patient.name}
                  onChange={onChange}
                  required
                  className="input-field"
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={patient.age}
                  onChange={onChange}
                  required
                  className="input-field"
                />
              </div>
              <br />

              <div className="form-group">
                <select
                  name="gender"
                  value={patient.gender}
                  onChange={onChange}
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
              </div>
              <br />

              <div className="form-group">
                <input
                  type="number"
                  name="co_number"
                  placeholder="Contact Number"
                  value={patient.co_number}
                  onChange={onChange}
                  required
                  className="input-field"
                />
              </div>
              <br />

              <div className="form-group">
                <select
                  name="admit"
                  value={patient.admit}
                  onChange={onChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>
                    "Yes" or "No"
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <br />

              <div className="form-group">
                <input
                  type="date"
                  name="admit_date"
                  placeholder="Enter admit date"
                  value={patient.admit_date}
                  onChange={onChange}
                  required
                  className="input-field"
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  name="medical_history"
                  placeholder="Medical History"
                  value={patient.medical_history}
                  onChange={onChange}
                  required
                  className="input-field"
                />
              </div>
              <br />

              <div className="button-group">
                <button type="submit" className="btn btn-add">
                  Add Patient
                </button>
                <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
