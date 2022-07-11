const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const jwtServices = {

  getToken: async (data) => {
    const token = jwt.sign({ data: data.username, adm: false }, SECRET, jwtConfig);
    return token;
  },
};

module.exports = jwtServices;