const { promisePool } = require('../../dbConection/db');

// exports.getAllExamples = async (req, res) => {
//     try {
//       const [rows, fields] = await promisePool.query('SELECT * FROM ejemplos');
//       res.json(rows);
//     } catch (error) {
//       console.error('Error en la consulta a la base de datos:', error.message);
//       res.status(500).send('Error interno del servidor');
//     }
//   };

  exports.getAllProduct = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query('select * from Product p inner join Supplier s on p.SupplierId=s.Id inner join Category c on c.Id=p.CategoryId');
      console.log(rows)
      console.log(fields)
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.getProductById = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query('SELECT * FROM ejemplos');
      res.json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.createProduct = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query('SELECT * FROM ejemplos');
      res.json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.updateProduct = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query('SELECT * FROM ejemplos');
      res.json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.deleteProduct = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query('SELECT * FROM ejemplos');
      res.json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };