const mongoose = require("mongoose");

function connect() {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then((res) => {
        console.log("Database Connected...");
      })
      .catch((err) => {
        console.log(`DATABASE ERROR - ${err}`);
      });
  } catch (error) {
    console.log(error);
  }
}


module.exports = connect