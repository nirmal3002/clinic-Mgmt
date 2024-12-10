const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser");
require("dotenv").config( { path: "./config.env" } )


const connectDB = require('./config/db');
const clinicRoutes = require('./routes/clinicroutes');
const clinicmodel = require('./models/clinicmodel');


// CONNECT TO DB
connectDB()

// INITIATE APP
const app = express()

// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("HomePage");
});



app.use('/api', clinicRoutes); // Use book routes with prefix '/api'

// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

