const express = require('express');
const router = express.Router();
const { sendAlert } = require('../controllers/alertController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to send emergency alert
router.post('/send', authMiddleware, sendAlert);

module.exports = router;
