const Patient = require("../models/patient");

exports.createPatient = (req, res, next) => {
  const patient = new Patient({
    vorname: req.body.vorname,
    name: req.body.name,
    geburtsdatum: req.body.geburtsdatum,
    telefon: req.body.telefon,
    adresse: req.body.adresse
  });
  patient
    .save()
    .then(cratedPatient => {
      res.status(201).json({
        message: "Patient added successfully",
        patient: {
          ...cratedPatient,
          id: cratedPatient._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a patient failed!"
      });
    });
};

exports.updatePatient = (req, res, next) => {
  const patient = new Patient({
    _id: req.body.id,
    vorname: req.body.vorname,
    name: req.body.name,
    geburtsdatum: req.body.geburtsdatum,
    telefon: req.body.geburtsdatum,
    adresse: req.body.adresse
  });
  Patient.updateOne({ _id: req.params.id }, patient)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate post!"
      });
    });
};


exports.getAllPatienten = ((req, res, next) => {
  const patientQuery = Patient.find();
  let fetchedPatienten;
  patientQuery
  .then(documents => {
    fetchedPatienten = documents;
    return Patient.countDocuments();
  })
  .then(count => {
    res.status(200).json({
      patienten: fetchedPatienten,
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching patienten failed!"
    });
  });
})

exports.getPatient = (req, res, next) => {
  Patient.findById(req.params.id)
    .then(patient => {
      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json({ message: "Patient not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching patient failed!"
      });
    });
};

exports.deletePatient = (req, res, next) => {
  Patient.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting patient failed!"
      });
    });
};
