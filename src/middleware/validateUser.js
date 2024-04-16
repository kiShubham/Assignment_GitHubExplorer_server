//import validating fn;

const { validate } = require("../validation/user.validate");

const validateUsername = async (req, res, next) => {
  const { username } = req.params;

  const result = await validate(username);
  if (!result) {
    res.send(400).json({ message: "username error" }); //bad request
  }
  return next();
};

module.exports = { validateUsername };
