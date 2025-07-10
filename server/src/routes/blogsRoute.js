const express = require("express");

const router = express.Router();

// import
const blogsModel = require("../models/blogsModel");

// GET
// ALL
router.get("/", async (req, res) => {
  try {
    const results = await blogsModel.find();
    // const total = await blogsModel.countDocuments();
    const total = results.length;

    res.send({
      success: true,
      results,
      messgae: "Blogs fetched successfully",
      total,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      results: error || error.message || "Failed to fetch blogs",
      messgae: "Failed to fetch blogs",
    });
  }
});

//
module.exports = router;
