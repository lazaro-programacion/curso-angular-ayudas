const express = require("express");
const app = express();
const patientRouter = require("./routes/patient")
const cors = require("cors")

app.use(express.json())
app.use(cors());


app.get("/", (req, res) => res.status(200).send("<h2>Server up and running</h2>"))
app.use("/img", express.static("./server/uploads"))
app.use("/patients/", patientRouter )

module.exports = app
