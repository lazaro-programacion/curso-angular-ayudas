const mongoose = require('mongoose')


const patientSchema = mongoose.Schema(
    {
        name: String,
        surname: String,
        pathologies: [String]
    }
)

module.exports = mongoose.model("Patient", patientSchema);