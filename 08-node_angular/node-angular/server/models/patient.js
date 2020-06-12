const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema (
  {
    name: String,
    surname: String,
    pathologies: [String]
  }
)

module.exports = mongoose.model("Patient", PatientSchema)

// Patient patients
// Proveedor proveedors
