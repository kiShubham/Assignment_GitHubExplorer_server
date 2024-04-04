// services ;
const userServices = require("../services/user.services");

const axios = require("axios");

const saveUser = async (req, res) => {
  try {
    const username = req.params.username;
    const API = "https://api.github.com/users";
    const resAPi = await axios.get(`${API}/${username}`);

    if (resAPi.status !== 200) {
      throw new Error("Failed to fetch user data");
    }

    const exist = await userServices.search({
      username: resAPi.data.login.toLowerCase(),
    });
    if (exist) {
      throw new Error("user already exist");
    }

    const userData = {
      username: resAPi.data.login.toLowerCase(),
      ID: resAPi.data.id,
      avatar_URL: resAPi.data.avatar_url,
      type: resAPi.data.type,
      name: resAPi.data.name,
      company: resAPi.data.name,
      blog: resAPi.data.blog,
      location: resAPi.data.location,
      email: resAPi.data.email,
      bio: resAPi.data.bio,
      public_repos: resAPi.data.public_repos,
      followers: resAPi.data.followers,
      following: resAPi.data.following,
      availability: true,
    };
    console.log(userData);
    const user = await userServices.register(userData);
    res.status(201).json({ message: "User registered successfully", user }); // change it accordingly
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findFollowers = async (req, res) => {
  try {
    const username = req.params.username;
    const result = await userServices.search({ username: username });

    // *we cannot find mutual friends because , user following link is not responding for any user we can check api

    const data = {
      followers: result.followers || 0,
      following: result.following || 0,
    };
    return res.status(200).json({ message: "mutual friends not found", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchUser = async (req, res) => {
  try {
    // const filterSearch = req.body;
    let filter = {};
    Object.keys(req.body).forEach((key) => {
      // Assign key-value pairs to the filter object
      filter[key] = req.body[key];
    });
    const result = await userServices.search(filter);

    res.status(200).json({ message: "search result", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const username = req.params.username;
    const data = { availability: false };
    const result = await userServices.deleteUser(username, data);
    res.status(200).json({ message: `${username} data deleted`, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const update = req.body;
    const username = req.params.username;
    const result = await userServices.updateUser(username, update);
    res.status(200).json({ message: `updated user`, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listUser = async (req, res) => {
  try {
    const result = await userServices.fetchAll();
    res.status(200).json({ message: "fetched all user", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listUser,
  updateUser,
  deleteUser,
  searchUser,
  findFollowers,
  saveUser,
};
