const { Schema, model } = require("mongoose");

// import bcrypt
const bcrypt = require("bcrypt");

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

// hash password before saving to the database
// Use a regular function instead of arrow function to maintain correct 'this' context
userSchema.pre("save", async function (next) {
  const user = this;
  // Only hash the password if it has been modified (or is new)
  // as we are using middleware, we will do our middleware tasks and then next()
  if (!user.isModified("password")) return next();
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;

  next();
});

const userModel = model("User", userSchema);

module.exports = userModel;
