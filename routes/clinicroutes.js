
const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/cliniccontrol');

router.post('/clinics', clinicController.createclinic);
router.get('/clinics', clinicController.getpatient);
router.get('/clinics/:id', clinicController.getpatientById);
router.put('/clinics/:id', clinicController.updatePatient);   // Update a room by ID
router.delete('/clinics/:id', clinicController.deletePatient);// Delete a room by ID


module.exports = router;
