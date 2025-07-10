const express = require("express");

const router = express.Router();

// import
const blogsModel = require("../models/blogsModel");

// seed import
const blogItems = require("../data/blogsData")

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



// POST
// NEW
router.post("/", async (req, res) => {
  try {
    // console.log(blogItems)
    const results = await blogsModel.insertMany(blogItems.blogs);

    res.send({
      success: true,
      results,
      messgae: "Blogs fetched successfully",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      results: error.message || error || "Failed to fetch blogs",
      messgae: "Failed to fetch blogs",
    });
  }
});

//
module.exports = router;
