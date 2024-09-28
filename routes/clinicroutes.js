
const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/cliniccontrol');

router.post('/clinics', clinicController.createclinic);
router.get('/clinics', clinicController.getpatient);
router.get('/clinics/:id', clinicController.getpatientById);
//  router.put('/clinics/:id', clinicController.updateBook); // Corrected this line
// router.delete('/clinics/:id', clinicController.deleteBook);

module.exports = router;
