const clinicControll = require('../models/clinicmodel');

exports.createclinic = async (req, res) => {
    try {
        let patient = new clinicControll({ name: req.body.name, age: req.body.age, admit_date:req.body.admit_date, admit:req.body.admit });
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
        res.send(patientsById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};


