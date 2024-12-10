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

// app.post("/clinics",async (req,res)=>{
//     let newData = new clinicmodel({
//         name:"bbb",
//         age: 12,
//         gender:"male",
//         contact_number: 122345,
//     })
//     const Data = await newData.save();
//     res.json(Data)
//     console.log("created",Data)
// })


app.use('/api', clinicRoutes); // Use book routes with prefix '/api'

// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

