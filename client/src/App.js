import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientEdit from './components/updatePatient';
import HomePage from './components/homePage';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ExportPage from './components/ExportPage'
import SearchPatient from './components/SearchPatient';
import QRCodePage from './components/QrCode';

import solarizedTheme from './container/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './App.css'
import CreatePatient from './components/createPatient';
import DetailsPatient from './components/detailsPatient';

const App = () => {
    return (
        <ThemeProvider theme={solarizedTheme}>
            <CssBaseline />

            <Router>
                <Navbar />
                <div className="box-container">
                    <Routes>
                        <Route path="/list" element={<PatientList />} />
                        <Route path="/add" element={< CreatePatient />} />
                        <Route path="/edit/:id" element={<PatientEdit />} />
                        <Route path="/detail/:id" element={<DetailsPatient />} />
                        <Route path="/export" element={<ExportPage />} />
                        <Route path="/search" element={<SearchPatient />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/scan" element={<QRCodePage />} />

                    </Routes>
                </div>
                <Footer />
            </Router>
        </ThemeProvider>

    );
};

export default App;