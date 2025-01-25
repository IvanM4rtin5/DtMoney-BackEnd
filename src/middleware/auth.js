const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
  // Verifica se o cabeçalho de autorização existe
  const authorizationHeader = req.headers.authorization;

  // Log no ambiente de desenvolvimento apenas
  if (authorizationHeader && process.env.NODE_ENV !== 'production') {
    console.log('Authorization Header:', authorizationHeader);
  }

  // Verifica se o token foi fornecido
  const token = authorizationHeader?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    // Verifica o token
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
