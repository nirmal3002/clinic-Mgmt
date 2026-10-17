
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config.env" });

const path = require("path");

const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");
const clinicRoutes = require("./routes/clinicroutes");

// INITIATE APP
const app = express();

// CORS CONFIG
const corsOptions = {
  origin: [
    "https://clinic-management-0q8q.onrender.com",
    "https://verbose-halibut-r4rjj9jv54669f5xv9-5000.app.github.dev",
    "https://5000-nirmal3002-clinicmgmt-miivutagmk6.ws-us117.gitpod.io",
    "http://localhost:3000",
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// CLINIC ROUTES
app.use("/api", clinicRoutes);

// TEST ROUTE
app.get("/home", (req, res) => {
  res.send("HomePage");
});

// STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));

// HANDLE FRONTEND ROUTES
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    (err) => {
      if (err) {
        res.status(500).send(err.message);
      }
    }
  );
});

// SERVER
const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
