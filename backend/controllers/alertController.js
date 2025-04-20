const Alert = require('../models/Alert');

// Send emergency alert
const sendAlert = async (req, res) => {
    const { latitude, longitude, emergencyContacts } = req.body;
    try {
        const newAlert = new Alert({
            user: req.user.id,  // User from JWT token
            location: { latitude, longitude },
            emergencyContacts,
        });

        await newAlert.save();
        res.status(200).json({ msg: 'Emergency alert sent successfully' });

        // Further logic: Notify emergency contacts via SMS, email, etc. (optional)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = { sendAlert };
