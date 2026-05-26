const mongoose = require("mongoose");
const dotenv = require("dotenv");

// LOAD ENV VARIABLES
dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  try {

    const DB = process.env.DATABASE;

    // CHECK DATABASE URL
    if (!DB) {
      console.log("DATABASE URL NOT FOUND");
      process.exit(1);
    }

    // CONNECT MONGODB
    const conn = await mongoose.connect(DB);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {

    console.error(`MongoDB Error: ${error.message}`);

    process.exit(1);
  }
};

module.exports = connectDB;