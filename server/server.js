const express = require("express");

// dotenv
require("dotenv").config()

// cors
const cors = require("cors")

// Database 'connect' import
require("./db/connect")()


// app
const app = express();

// port
const port = process.env.PORT || 5000

// parse options
app.use(cors())
app.use(express.json())



// GET, '/'
app.get('/', (req, res) => {
    res.send('Hotel Motel - RoofTop Server is running...')
})




app.listen(port, () => {
    console.log(`\nFullStack MERN Blog 2025 - Server is running on http://localhost:${port}\n`)
})