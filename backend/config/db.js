require('dotenv').config();
const mongoose = require('mongoose');  // Load environment variables

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;  // Get the MONGO_URI from the environment variables
        if (!dbURI) {
            throw new Error("MONGO_URI is not defined in .env file");
        }
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = connectDB;
