const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    ID: { type: Number, required: true },
    avatar_URL: { type: String, default: "" },
    type: { type: String, required: true },
    name: { type: String, default: "" },
    company: { type: String, default: "" },
    blog: { type: String, default: "" },
    location: { type: String, default: "" },
    email: { type: String, default: "" },
    bio: { type: String, default: "" },
    public_repos: { type: String, required: true },
    followers: { type: Number, required: true },
    following: { type: Number, required: true },
    availability: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
