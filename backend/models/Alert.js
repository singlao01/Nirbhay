const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: { 
        latitude: { type: Number, required: true }, 
        longitude: { type: Number, required: true }
    },
    emergencyContacts: [{ type: String }],  // Phone numbers or contacts to notify
    timestamp: { type: Date, default: Date.now }
});

const Alert = mongoose.model('Alert', AlertSchema);
module.exports = Alert;
