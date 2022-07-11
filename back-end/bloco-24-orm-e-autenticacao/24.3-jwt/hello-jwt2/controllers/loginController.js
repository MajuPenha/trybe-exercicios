const jwtServices = require('../services/jwtServices');
const loginValidation = require('../services/validation');

const loginController = {

  login: async (req, res) => {
    const value = await loginValidation.bodyValidation(req.body);
    const result = await jwtServices.getToken(value);
    res.status(200).json({ token: result });
  },

};

module.exports = loginController;