const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    role: {
      type: String,
      default: "Basic",
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// const User = Mongoose.model("User", userSchema);
module.exports = User;
