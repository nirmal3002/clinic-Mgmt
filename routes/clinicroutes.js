
const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/cliniccontrol');

// router.post('/clinics', clinicController.createclinic);
router.post("/clinics",async (req,res)=>{
    let newData = new clinics({
        name:"bbb",
        age: 12,
        gender:"male",
        contact_number: 122345,
    })
    const Data = await newData.save();
    res.json(Data)
    console.log("created",Data)
})
router.get('/clinics', clinicController.getpatient);
router.get('/clinics/:id', clinicController.getpatientById);
router.put('/clinics/:id', clinicController.updatePatient);   // Update a room by ID
router.delete('/clinics/:id', clinicController.deletePatient);// Delete a room by ID


module.exports = router;
