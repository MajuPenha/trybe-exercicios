const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: { message: 'Token not found' } });
  try {
    const auth = jwt.verify(authorization, SECRET);
    req.user = auth;
    return next();
  } catch (err) {
    return next(err);
  }
};