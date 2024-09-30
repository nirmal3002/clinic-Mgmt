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
app.post('/', (req, res) => {
     res.send('Post received!');
});

app.use('/api', clinicRoutes); // Use book routes with prefix '/api'

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// const express = require('express');
// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// app.post('/', (req, res) => {
//     // Handle the POST request here
//     res.send('Post received!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
