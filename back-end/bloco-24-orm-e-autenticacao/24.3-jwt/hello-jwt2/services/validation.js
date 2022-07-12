const Joi = require('joi');

const loginValidation = {

  bodyValidation: async (data) => {
    const schema = Joi.object({
      username: Joi.string().min(5).required(),
      password: Joi.string().min(5).required(),
    });

    const { error, value } = schema.validate(data);
    if (error) throw error;

    return value;
  },

  admValidation: ({ username, password }) => {
    if (username === 'admin' && password === 's3nh4S3gur4???') return true;
  },

};

module.exports = loginValidation;