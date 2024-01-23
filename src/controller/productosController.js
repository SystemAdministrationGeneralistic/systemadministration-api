const { promisePool } = require('../../dbConection/db');

exports.getAllExamples = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query('SELECT * FROM ejemplos');
      res.json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };