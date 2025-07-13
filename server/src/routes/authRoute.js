const express = require("express");

const router = express.Router();

// userModel
const userModel = require("../models/userModel");

// middleware generateToken
const generateToken = require("../middlewares/generateToken");

// POST - REGISTER
router.post("/register", async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      profileImg: profileImg = "",
    } = req.body;

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
    console.log(user);
    const result = await user.save();
    if (result) {
      return res.send({
        success: true,
        result,
        message: "User Registered Successfully",
      });
    } else {
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

// POST - LOGIN
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    // get user with this email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        result: "User with this Email does not Exists",
        message: "User with this Email does not Exists",
      });
    }
    const { password, ...result } = user?._doc;

    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
      return res.status(404).send({
        success: false,
        result: result || "Incorrect Password",
        message: "Incorrect Password",
      });
    }

    //   todo: generate token here
    const token = await generateToken(user._id, user.role);
    // console.log("GENERATED TOKEN - ", token)
    res.cookie("token", token, {
      httpOnly: true, //enable this when you have only http://
      secure: true,
      sameSite: true,
    });

    return res.send({
      token,
      success: true,
      result,
      message: "User Registered Successfully",
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      result: error.message || error || "Login Failed! Try again",
      message: "Login Failed! Try again",
    });
  }
});

// GET - LOGOUT
router.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.send({
      success: true,
      result: "Logout Successfully",
      message: "Logout Successfully",
    });
  } catch (error) {
    console.error("FAILED TO LOGOUT USER - ", error);
    return res.status(404).send({
      success: false,
      result: error.message || error || "Failed to Logout User",
      message: "Failed to Logout User",
    });
  }
});

module.exports = router;
