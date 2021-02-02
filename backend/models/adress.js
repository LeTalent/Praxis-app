const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    strasse: { type: String, required: true },
    nr: { type: Number, required: true },
    plz: { type: Number, required: true },
    ort: { type: String, required: true }
})
module.exports = mongoose.model('Address',addressSchema )