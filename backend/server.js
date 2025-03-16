require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Nirbhay Women Safety App Backend!");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/sos", require("./routes/sosRoutes"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
