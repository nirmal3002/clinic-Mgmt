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
    contact_number: '',
    admit: '',
    admit_date: '',
    medical_history: '',
  });

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const patient = {
    //   "name": "John Doe2",
    //   "age": 30,
    //   "gender": "male",
    //   "contact_number": "1234567890",
    //   "admit": true,
    //   "medical_history": "No significant medical history."
    // }
    console.log(patient)
    axios.post('https://5000-nirmal3002-clinicmgmt-s75y7ttlzli.ws-us117.gitpod.io/api/clinics', patient)
    .then((res) => {
        setPatient({
          name: '',
          age: '',
          gender: '',
          contact_number: '',
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
        // setTimeout(() => {
        //   navigate('/');
        // }, 5000);
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
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
              </div>
              <br />

              <div className="form-group">
                <input
                  type="string"
                  name="contact_number"
                  placeholder="Contact Number"
                  value={patient.contact_number}
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
                    Admited before ?
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
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
