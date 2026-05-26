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

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS CONFIG
const corsOptions = {
  origin: [
    "https://clinic-management-0q8q.onrender.com",
    "https://5000-nirmal3002-clinicmgmt-miivutagmk6.ws-us117.gitpod.io",
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

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

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

// SERVER
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});