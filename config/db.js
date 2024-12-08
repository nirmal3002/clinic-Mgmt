const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.REACT_APP_API_URL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;