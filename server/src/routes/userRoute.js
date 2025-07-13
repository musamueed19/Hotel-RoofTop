const express = require("express");
const router = express.Router();

// users Model
const userModel = require("../models/userModel");

// import bcrypt
const bcrypt = require("bcrypt")

// GET - ALL USERS
router.get("/", async (req, res) => {
  try {
    const result = await userModel.find(
      {},
      "id firstName lastName email role status profileImg updatedAt createdAt updatedBy"
    );

    if (!result) {
      return res.status(404).send({
        success: false,
        result,
        message: "Failed to get Users",
      });
    }
    return res.send({
      success: true,
        result,
      total: result.length,
      message: "User Fetched Successfully",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      result: error.message,
      message: "Failed to get Users",
    });
  }
});

// POST - UPDATE USER
router.patch("/:id", async (req, res) => {
  try {
    // If password is being updated, hash it first
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).send({
        success: false,
        user,
        message: "Failed to update User",
      });
    }

    const { password, ...result } = user._doc;
    return res.send({
      success: true,
      result, // Send the result without password instead of user
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      result: error.message,
      message: "Failed to update User",
    });
  }
});

module.exports = router;
