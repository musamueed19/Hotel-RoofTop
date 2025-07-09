const express = require("express");

// dotenv
const env = require("dotenv")
env.config();

// app
const app = express();

// port
const port = process.env.PORT || 5000

// GET, '/'
app.get('/', (req, res) => {
    res.send('Hotel Motel - RoofTop Server is running...')
})




app.listen(port, () => {
    console.log(`FullStack MERN Blog 2025 - Server is running on http://localhost:${port}`)
})