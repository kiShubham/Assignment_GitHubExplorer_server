const User = require("../models/user.model");

const register = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    throw error;
  }
};

const search = async (data) => {
  try {
    const res = await User.find(data);
    return res;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (username, obj) => {
  try {
    const filter = { username: username };
    const update = { $set: obj };
    const options = { new: true };
    const res = await User.findOneAndUpdate(filter, update, options);
    return res;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (username, updateData) => {
  try {
    const filter = { username: username };
    const update = { $set: updateData };
    const options = { new: true };
    const res = await User.findOneAndUpdate(filter, update, options);
    return res;
  } catch (error) {
    throw error;
  }
};

const fetchAll = async (sortBy) => {
  try {
    let sortQuery = {};
    sortQuery[sortBy] = 1;
    return await User.find().sort(sortQuery);
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchAll, updateUser, deleteUser, search, register };
