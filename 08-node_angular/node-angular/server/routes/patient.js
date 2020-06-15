const { createPatient, getPatients, getPatient,
   updatePatient, deletePatient} = require('../controllers/patient')
const {upload} = require('../controllers/upload')
const {Router} = require("express")
const router = Router();
const multipart = require("connect-multiparty")
const multipartMiddleware  =  multipart({ uploadDir:  './server/uploads' });

router
  .post("/", createPatient)
  .get("/", getPatients)
  .get("/:id", getPatient)
  .put("/:id", updatePatient)
  .delete("/:id", deletePatient)
  .post("/upload", multipartMiddleware, upload)

  //.get("/:id/fallecido")
  //.patch()

module.exports = router;

