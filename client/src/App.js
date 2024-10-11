import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetail from './components/detailsPatient';
import PatientAdd from './components/createPatient';
import PatientEdit from './components/updatePatient';

import './App.css'

const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Routes>
                    <Route path="/" element={<PatientList />} />
                    <Route path="/add" element={<PatientAdd />} />
                    <Route path="/edit/:id" element={<PatientEdit />} />
                    <Route path="/detail/:id" element={<PatientDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;