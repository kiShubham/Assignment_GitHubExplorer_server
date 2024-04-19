const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  public_repos: { type: Number, required: true },
  public_gists: { type: Number, required: true },
  followers: { type: Number, required: true },
  following: { type: Number, required: true },
  friends: { type: Number, required: true, default: 0 },
  availability: { type: Boolean, default: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  followersArray: { type: Array, default: [] },
  followingArray: { type: Array, default: [] },
  friendsArray: { type: Array, default: [] },
  repoUrl: { type: String, default: "" },
});

//mutual connection refer as friends : person who is in both array follower and following

const User = mongoose.model("User", UserSchema);
module.exports = User;
