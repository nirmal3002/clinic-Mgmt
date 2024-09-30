const express = require('express');
const connectDB = require('./config/db');
const clinicRoutes = require('./routes/clinicroutes');
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage");
});


app.use('/api', clinicRoutes); // Use book routes with prefix '/api'

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

