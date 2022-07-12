const jwt = require('jsonwebtoken');
const validation = require('./validation');

const { SECRET } = process.env;

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const jwtServices = {

  getToken: async (data) => {
    const isAdm = validation.admValidation(data);
    if (!isAdm) {
      return jwt.sign({ data: data.username, adm: false }, SECRET, jwtConfig);
    }

    return jwt.sign({ data: data.username, adm: true }, SECRET, jwtConfig);
  },
};

module.exports = jwtServices;