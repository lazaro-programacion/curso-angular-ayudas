const express =  require('express');
const bodyParser = require("body-parser")
const mainRoutes = require('./routes/routes-main')
const patientRoutes = require('./routes/patient')
const app = express();

// convierte lo que llege en un objeto json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", mainRoutes)
app.use("/patients/",patientRoutes)






module.exports = app;