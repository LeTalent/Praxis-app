const express = require("express");

const PatientController = require("../controllers/patient");


const router = express.Router();

router.post("", PatientController.createPatient);

router.put("/:id", PatientController.updatePatient);

router.get("", PatientController.getAllPatienten);

router.get("/:id", PatientController.getPatient);

router.delete("/:id", PatientController.deletePatient);

module.exports = router;
