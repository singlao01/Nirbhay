const express = require("express");
const router = express.Router();

router.post("/send-alert", (req, res) => {
  const { location, contacts } = req.body;
  console.log(`Emergency alert sent to ${contacts} with location: ${location}`);
  res.json({ message: "SOS Alert Sent Successfully!" });
});

module.exports = router;
