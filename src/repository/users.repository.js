const { User } = require('../models/user.model');

const postUser = async (objUser) => {
  const user = new User(objUser);
  const userFromDb = await user.save();
  return userFromDb;
};

const getUserByEmail = async (email) => await User.findOne({ email });

module.exports = {
  postUser,
  getUserByEmail,
};