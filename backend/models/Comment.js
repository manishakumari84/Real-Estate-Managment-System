const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    listing: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel", // Update the ref property to the correct name of the User model
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
