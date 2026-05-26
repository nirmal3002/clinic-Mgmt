const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

console.log("JWT_SECRET:", process.env.JWT_SECRET);

// REGISTER ROUTE
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {

    // CHECK USER EXISTS
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATE USER
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // CREATE TOKEN
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {

    // FIND USER
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // CREATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;