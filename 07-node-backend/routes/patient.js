const express = require('express');
const router = express.Router();
const patientController = require("../controllers/patient")

router.get("/",patientController.getPatients);
router.post("/", patientController.createPatient);
router.get("/:id", patientController.getPatient);

module.exports = router;