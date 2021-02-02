const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const patientSchema = mongoose.Schema({
 vorname: { type: String, required: true },
 name: { type: String, required: true },
 geburtsdatum: { type: Date },
 telefon: { type: Number, required: true },
 email: { type: String, required: true, unique: true },
 addresse: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
});

patientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Patient', patientSchema);
