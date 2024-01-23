const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  // Ejecutar las validaciones definidas en las rutas
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Si no hay errores, continuar con la siguiente función middleware o ruta
  next();
};

module.exports = { validateFields };