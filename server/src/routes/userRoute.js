const express = require("express");

const router = express.Router();

// userModel
const userModel = require("../models/userModel");

// POST - REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email, firstName, lastName, password, profileImg: profileImg="" } = req.body;

    // get user all ready registered with this email, if not.
    // then add new user with this data
    //   const isEmailExists = await userModel.find();

    //   now create a new User
    const user = new userModel({
      email,
      firstName,
      lastName,
      password,
      profileImg,
    });
console.log(user)
    // const result = await user.save();
    if (result) {
      return res.send({
        success: true,
        result,
        message: "User Registered Successfully",
      });
      }
    else {
        return res.status(404).send({
          success: false,
          result: result || "Sorry! Registration Failed",
          message: "Sorry! Registration Failed",
        });
      }
  } catch (error) {
    return res.status(404).send({
      success: false,
      result: error.message || error || "Sorry! Registration Failed",
      message: "Sorry! Registration Failed",
    });
  }
});

module.exports = router;
