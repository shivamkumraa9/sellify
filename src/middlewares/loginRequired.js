const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.split(' ').length === 2) {
    [, token] = token.split(' ');
    try {
      const id = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(id._id);
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
      req.user = user;
      return next();
    // eslint-disable-next-line no-empty
    } catch {}
  }
  return res.status(401).json({ error: 'Token not found' });
};
