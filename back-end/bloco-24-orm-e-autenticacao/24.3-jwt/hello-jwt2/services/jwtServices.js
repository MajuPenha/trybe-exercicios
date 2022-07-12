const jwt = require('jsonwebtoken');
const validation = require('./validation');

const { SECRET } = process.env;

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const jwtServices = {

  getToken: async (data) => {
    const isAdm = await validation.admValidation(data);
    if (!isAdm) {
      return jwt.sign({ username: data.username, adm: false }, SECRET, jwtConfig);
    }

    return jwt.sign({ username: data.username, adm: true }, SECRET, jwtConfig);
  },
};

module.exports = jwtServices;