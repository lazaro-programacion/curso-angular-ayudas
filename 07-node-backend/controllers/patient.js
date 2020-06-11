const Patient = require('../models/patient');

const patientController  = {
    getPatients : (req, res) => {
        Patient.find(
            (err, patients) => {
                return err ?  res.status(500).send(err) :  res.status(200).jsonp(patients)
            }
        )
    },
    createPatient :(req, res) => {
        console.log(req.body);
        const patient = new Patient();
        patient.name = req.body.name;
        patient.surname = req.body.surname;
        patient.pathologies = req.body.pathologies
        patient.save( 
            (err, newPatient) => 
                err ?
                res.status(500).send("Error guardando : " + err.message):
                res.status(201).jsonp(newPatient)
        );
    },
    getPatient: (req, res)  => {
        Patient.findById(req.params.id, (err, patient) => 
            err ? res.status(500).send("error") : res.status(200).jsonp(patient)
        )
    }


    // Modificacion (PUT) Borrado (DELETE)
}

module.exports = patientController