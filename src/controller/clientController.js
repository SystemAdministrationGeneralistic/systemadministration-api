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

  exports.getAllcategory = async (req, res) => {
    try {
      const [rows, fields] = await promisePool.query(`select c.id,c.name from category c `);     
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.getcategoryById = async (req, res) => {
    const {id}=req.params
    try {
      const [rows, fields] = await promisePool.query(`select c.id,c.name from category c where c.id=${id}`);     
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.createcategory = async (req, res) => {
    const {name}=req.body;
    try {
      const [rows, fields] = await promisePool.execute(`insert into category (
        creationDate,
        modificationDate,
        deletationDate,
        name,
       )
        VALUES
        (NOW(),NOW(),null,?);`,[name]);

       
        res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.updatecategory = async (req, res) => {
    const {name,id}=req.body;
    try {
      const updateQuery = `update category set modificationDate=now(),name=? where id=?`;
      const newData = [name,id]; // Ejemplo de nuevo valor y ID del registro a actualizar
  
      const [rows, fields] = await promisePool.execute(updateQuery, newData);
  
          
          res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.deletecategory = async (req, res) => {
    const {id}=req.params
    try {
      const deleteQuery = 'delete from category where id=?';     
  
      const [rows, fields] = await promisePool.execute(deleteQuery, [id]);
        
      
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };