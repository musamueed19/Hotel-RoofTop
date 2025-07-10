const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    coverImg: { type: String, required: true },
    auther: { type: String, required: true, default: "admin" },
    updatedBy: { type: String, required: true, default: "admin" },
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
