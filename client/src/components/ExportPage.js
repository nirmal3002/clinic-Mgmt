import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const ExportPage = () => {
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${URL}/api/clinics`)
      .then(res => {
        setPatient(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setLoading(false);
      });
  }, []);
 
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
    
    const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Patients");
            const excelBuffer = XLSX.write(workbook, { patientType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(data, 'patients-list.xlsx');
          };
          const exportToCSV = () => {
            const worksheet = XLSX.utils.json_to_sheet(patient.map(patient => ({
              name: patient.name,

              age: patient.age,
              gender: patient.gender,
              contact_number: patient.contact_number,
              admit: patient.admit,
              admit_date:patient.admit_date,
              medical_history:patient.medical_history
            })));
            const csv = XLSX.utils.sheet_to_csv(worksheet);
            const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
            saveAs(data, 'patients-list.csv');
          };
          const exportToText = () => {
            let content = 'Patients List\n\n';
            content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
            
            patient.forEach((patient, index) => {
              content += `${index + 1}. PATIENTS DETAILS\n`;
              content += `Name: ${patient.name}\n`;
              content += `Age: ${patient.age}\n`;
              content += `Gender: ${patient.gender}\n`;
              content += `contact_number: ${patient.contact_number}\n`;
              content += `admit: ${patient.admit}\n`;
              content += `Admite Date: ${new Date(patient.admite_Date).toLocaleDateString()}\n`;
              content += `medical_history: ${patient.medical_history}\n`;
              content += '\n----------------------------\n\n';
            });
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            saveAs(blob, 'patients-list.txt');
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
                  { <Button
                    variant="contained"
                    size="large"
                    startIcon={<TableViewIcon />}
                    onClick={exportToCSV}
                    sx={{ p: 2 }}
                  >
                    Export as CSV
                  </Button> }
                  { <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    onClick={exportToExcel}
                    sx={{ p: 2 }}
                  >
                    Export as Excel
                  </Button> }
                  { <Button
                    variant="contained"
                    size="large"
                    startIcon={<DescriptionIcon />}
                    onClick={exportToText}
                    sx={{ p: 2 }}
                  >
                    Export as Text
                  </Button> }
                </Box>
                <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
                  Total Patient: {patient.length}
                </Typography>
              </Paper>
            </Container>
          );
        };

export default ExportPage;