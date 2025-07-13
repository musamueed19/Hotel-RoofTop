/*
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const validateRequest = require("../../middlewares/validateRequest");
const { protect, authorize } = require("../middlewares/auth");

// Public routes
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);

// Protected routes
router.use(protect);

// Author/admin only routes
router.post(
  "/",
  authorize("author", "admin"),
  validateRequest("createBlog"),
  blogController.createBlog
);

router.put(
  "/:id",
  authorize("author", "admin"),
  validateRequest("updateBlog"),
  blogController.updateBlog
);

router.delete("/:id", authorize("admin"), blogController.deleteBlog);

module.exports = router;
*/

const express = require("express");

const router = express.Router();

// import
const blogsModel = require("../models/blogModel");

// seed import
const blogItems = require("../data/blogsData");
const { default: mongoose } = require("mongoose");

// GET
// ALL
router.get("/", async (req, res) => {
  try {
    // Destructure query parameters
    const {
      page = 1,
      limit = 10,
      sort = "-createdAt",
      status = "active",
      category,
      tag,
      search,
    } = req.query;

    // Build query object
    const query = { status };

    // 
     if (search) {
       query.$or = [
         { title: { $regex: search, $options: "i" } },
         { content: { $regex: search, $options: "i" } },
       ];
    }
    

    const results = await blogsModel.find(query);
    // const total = await blogsModel.countDocuments();
    // const total = results.length;

    res.send({
      success: true,
      results,
      messgae: "Blogs fetched successfully",
      total: results.length,
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

// GET - VIEW SINGLE BLOG
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format if using MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        message: "Invalid blog ID format"
      });
    }

    const blog = await blogsModel.findById(id);

    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found"
      });
    }

    res.send({
      success: true,
      result: blog,
      message: "Blog fetched successfully"
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send({
      success: false,
      message: "Failed to fetch blog",
      error: error.message
    });
  }
});
//
module.exports = router;

