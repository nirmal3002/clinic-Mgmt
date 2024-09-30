const clinicControll = require('../models/clinicmodel');

exports.createclinic = async (req, res) => {
    try {
        let patient = new clinicControll({ name: req.body.name, age: req.body.age, gender:req.body.gender, 
            contact_number:req.body.contact_number,  admit_date:req.body.admit_date, admit:req.body.admit,  medical_history:req.body.medical_history  });
        patient = await patient.save();
        res.send(patient);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getpatient = async (req, res) => {
    try {
        const patients = await clinicControll.find();
        res.send(patients);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getpatientById = async (req, res) => {
    try {
        const patientById = await clinicControll.findById(req.params.id);
        if (!patientById) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
        res.send(patientById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
// Update a patientinfo by ID
exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await clinicControll.findByIdAndUpdate(req.params.id, {
            name: req.body.name, age: req.body.age, gender:req.body.gender, 
            contact_number:req.body.contact_number, admit_Date: req.body.admit_Date,
            medical_history:req.body.medical_history
        }, { new: true }); // Return the updated patientinfo
     if (!updatedPatient) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
    res.send(updatedPatient); // Send the updated patientinfo as a response
}   catch (err) {
  res.status(400).send(err.message); // Send an error response if something goes wrong
}
};

// Delete a patientinfo by ID
exports.deletePatient = async (req, res) => {
try {
const patientById = await clinicControll.findByIdAndDelete(req.params.id); // Find patientinfo by ID and delete it
if (!patientById) return res.status(404).send('Patient not found in database'); // If patientinfo is not found, return 404
res.send("Patient deleted successfully"); // Send success message
} catch (err) {
res.status(400).send(err.message); // Send an error response if something goes wrong
}
};


