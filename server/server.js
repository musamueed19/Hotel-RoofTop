const express = require("express");

// dotenv
require("dotenv").config();

// cors
const cors = require("cors");

// Database 'connect' import
require("./db/connect")();

// blogRoute
const blogRoute = require("./src/routes/blogRoute");
// userRoute
const userRoute = require("./src/routes/userRoute");

// ---------------------------

// app
const app = express();

// port
const port = process.env.PORT || 5000;

// parse options
app.use(
  cors({
    origin: ["http://localhost:5173", "https://hotelrt.vercel.app", "*"],
    credentials: true, // enable set cookies
  })
);


// json middleware
app.use(express.json());

// GET, '/'
app.get("/", (req, res) => {
  res.send("Hotel Motel - RoofTop Server is running...");
});

// App.use
app.use("/api/v0/blogs", blogRoute);
app.use("/api/v0/auth", userRoute);

app.listen(port, () => {
  console.log(
    `\nFullStack MERN Blog 2025 - Server is running on http://localhost:${port}\n`
  );
});
