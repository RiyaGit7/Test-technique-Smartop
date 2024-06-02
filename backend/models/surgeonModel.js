const mongoose = require('mongoose');

const SurgeonSchema = new mongoose.Schema({
    surgeon: String,
    specialty: String,
    anesthsiste: String,
    nurse1: String,
    nurse2: String,
    roomNumber: Number,
    intervention: String
});

const Surgeon = mongoose.model('Surgeon', SurgeonSchema);

module.exports = Surgeon;
