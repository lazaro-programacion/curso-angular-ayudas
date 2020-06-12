const Patient = require("../models/patient")

const patientController = {
  createPatient: (req, res) => {
    const {body} = req;
    const patient = new Patient();
    patient.name= body.name;
    patient.surname= body.surname;
    patient.pathologies= body.pathologies;
    patient.save();
    return res.status(201).jsonp(patient);
  },

  getPatients: (req, res)  => {
    Patient.find(
      (err, patients) =>  err ? res.status(500).send("error")
                            : res.status(200).jsonp(patients)
    )
  },

  getPatient: (req, res)  => {
    Patient.findById(req.params.id, (err,patient) =>
      err ? res.status(404).send("error") :
      res.status(200).jsonp(patient)
    )
  },

  updatePatient: (req, res) => {
    const {body, params}= req;
      Patient.findById(params.id, (err, patient) => {
        if (err) {
          return res.status(404).send("Not found");
        }
        patient.name= body.name;
        patient.surname= body.surname;
        patient.pathologies= body.pathologies;
        patient.save()
        return res.status(200).jsonp(patient)
      })
  },

  deletePatient: (req, res) => {
    const {id} = req.params;
    Patient.findById(id, (err, patient) => {
      if (err) {
        return res.status(500);
      }
      if (!patient) {
        return res.status(404).send("not found")
      }
      patient.remove();
      return res.status(200).jsonp(patient);
    })
  }

}

module.exports = patientController
