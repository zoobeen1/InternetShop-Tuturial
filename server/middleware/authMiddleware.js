const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; //Bearer lkkjhkjh
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Не авторизован!2' });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log();
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Не авторизован!1' });
  }
};
