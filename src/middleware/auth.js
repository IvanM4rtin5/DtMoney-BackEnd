const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
 
  const authorizationHeader = req.headers.authorization;


  if (authorizationHeader && process.env.NODE_ENV !== 'production') {
    console.log('Authorization Header:', authorizationHeader);
  }

 
  const token = authorizationHeader?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
