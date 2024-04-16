const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().required().min(1),
});

const validate = async (username) => {
  try {
    const value = await schema.validateAsync({
      username,
    });
    return value;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { validate };
