import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
// import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ExportPage = () => {
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://clinic-management-0q8q.onrender.com/api/clinics')
      .then(res => {
        setPatient(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setLoading(false);
      });
  }, []);
  console.log(patient);
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Books List', 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

    const tableColumn = ["name", "age", "gender", "contact_number", "admit", "admit_date", "medical_history"];
    const tableRows = patient.map(patient => [
      patient.name,
      patient.age,
      patient.gender,
      patient.contact_number,
      patient.admit,
      new Date(patient.admite_date).toLocaleDateString(),
      patient.medical_history

    ]);
    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 }
    });

    doc.save('PatientList.pdf');
  };
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(patient.map(book => ({
      name: patient.name,

      age: patient.age,
      gender: patient.gender,
      contact_number: patient.contact_number,
      admit: patient.admit,
      admit_date:patient.admit_date,
      medical_history:patient.medical_history
        ,
    })));
    
    const workpatient = XLSX.utils.patient_new();
            XLSX.utils.patient_append_sheet(workpatient, worksheet, "Patients");
            const excelBuffer = XLSX.write(workpatient, { patientType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(data, 'patients-list.xlsx');
          };

          
          if (loading) {
            return (
              <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
              </Container>
            );
          }

          return (
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom align="center" color="primary">
                  Export Patients
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
                  Export your patient collection in different formats
                </Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                  gap: 3,
                  mt: 4 
                }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PictureAsPdfIcon />}
                    onClick={exportToPDF}
                    sx={{ p: 2 }}
                  >
                    Export as PDF
                  </Button>
                  {/* { <Button
                    variant="contained"
                    size="large"
                    startIcon={<TableViewIcon />}
                    onClick={exportToCSV}
                    sx={{ p: 2 }}
                  >
                    Export as CSV
                  </Button> } */}
                  { <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    onClick={exportToExcel}
                    sx={{ p: 2 }}
                  >
                    Export as Excel
                  </Button> }
                  {/* { <Button
                    variant="contained"
                    size="large"
                    startIcon={<DescriptionIcon />}
                    onClick={exportToText}
                    sx={{ p: 2 }}
                  >
                    Export as Text
                  </Button> } */}
                </Box>
                <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
                  Total Patient: {patient.length}
                </Typography>
              </Paper>
            </Container>
          );
        };

export default ExportPage;