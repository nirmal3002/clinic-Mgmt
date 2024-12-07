import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetail from './components/detailsPatient';
import PatientAdd from './components/createPatient';
import PatientEdit from './components/updatePatient';
import HomePage from './components/homePage';
import Footer from './components/footer';
import Navbar from './components/navbar';

import solarizedTheme from './container/Theme';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

import './App.css'

const App = () => {
    return (
        <ThemeProvider theme={solarizedTheme}>
      <CssBaseline />

        <Router>
            <Navbar />
            <div className="box-container">
                <Routes>
                    <Route path="/list" element={<PatientList />} />
                    <Route path="/add" element={<PatientAdd />} />
                    <Route path="/edit/:id" element={<PatientEdit />} />
                    <Route path="/detail/:id" element={<PatientDetail />} />
                    <Route path="/" element={<HomePage />} />
                    
                </Routes>
            </div>
               <Footer/>
        </Router>
        </ThemeProvider>

    );
};

export default App;