const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser");
require("dotenv").config( { path: "./config.env" } )
const path = require('path');


const connectDB = require('./config/db');
const clinicRoutes = require('./routes/clinicroutes');
const clinicmodel = require('./models/clinicmodel');


// CONNECT TO DB


// INITIATE APP
const app = express()

// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());
// const corsOptions = {
    //   origin: 'https://3000-nirmal3002-clinicmgmt-u8iv2dgoy2d.ws-us117.gitpod.io', // Replace with your frontend origin
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   credentials: true, // Allow cookies if needed
    // };
    // app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("HomePage");
});



app.use('/api', clinicRoutes); // Use book routes with prefix '/api'

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});
// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
connectDB()

