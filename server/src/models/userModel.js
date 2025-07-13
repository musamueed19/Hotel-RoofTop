const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    profileImg: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    updatedBy: { type: String, required: true, default: "admin" },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"],
    },
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

const userModel = model("User", userSchema);

module.exports = userModel;
