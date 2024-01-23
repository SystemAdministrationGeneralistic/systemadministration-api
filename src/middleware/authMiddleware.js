const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido' });
    }

    req.user = user;
    next(); // Continuar con el siguiente middleware o ruta
  });
};

module.exports = { authenticateToken };