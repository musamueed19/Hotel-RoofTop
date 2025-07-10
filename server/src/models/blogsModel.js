const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    content: { type: String, required: true },
    category: { type: String, required: true },
    coverImg: { type: String, required: true },
    authorImg: { type: String, required: true },
    publishedDate: { type: String, required: true },
    readingTime: { type: String, required: true },
    author: { type: String, required: true, default: "admin" },
    updatedBy: { type: String, required: true, default: "admin" },
    tags: { type: Array, default: [] },
    status: {
      type: String,
      required: true,
      default: "active",
      enum: ["active", "inactive", "draft", "archived"],
    },
  },
  {
    timestamps: true,
  }
);

const blogsModel = mongoose.model("blog", blogsSchema);

module.exports = blogsModel;
