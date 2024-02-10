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
      const [rows, fields] = await promisePool.query(`select p.name as productName,p.description,p.CodArt,p.quantity,p.price,c.name as categoryName,s.name as supplierName from Product p
      inner join Supplier s on p.SupplierId=s.Id
      inner join Category c on c.Id=p.CategoryId;`);     
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.getProductById = async (req, res) => {
    const {id}=req.params
    try {
      const [rows, fields] = await promisePool.query(`select p.name as productName,p.description,p.CodArt,p.quantity,p.price,c.name as categoryName,s.name as supplierName from Product p
      inner join Supplier s on p.SupplierId=s.Id
      inner join Category c on c.Id=p.CategoryId where p.id=${id}`);     
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.createProduct = async (req, res) => {
    const {name,description,quantity,price,codArt,supplierId,categoryId}=req.body;
    try {
      const [rows, fields] = await promisePool.execute(`insert into Product (
        creationDate,
        modificationDate,
        deletationDate,
        name,
        description,
        quantity,
        price,
        CodArt,
        SupplierId,
        CategoryId)
        VALUES
        (NOW(),NOW(),null,?,?,?,?,?,?,?);`,[name,description,quantity,price,codArt,supplierId,categoryId]);

       
        res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.updateProduct = async (req, res) => {
    const {name,description,quantity,price,codArt,supplierId,categoryId,id}=req.body;
    try {
      const updateQuery = `update Product set modificationDate=now(),name=?,description=?,quantity=?,price=?,CodArt=?,SupplierId=?,CategoryId=? where id=?`;
      const newData = [name,description,quantity,price,codArt,supplierId,categoryId,id]; // Ejemplo de nuevo valor y ID del registro a actualizar
  
      const [rows, fields] = await promisePool.execute(updateQuery, newData);
  
          
          res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.deleteProduct = async (req, res) => {
    const {id}=req.params
    try {
      const deleteQuery = 'delete from Product where id=?';     
  
      const [rows, fields] = await promisePool.execute(deleteQuery, [id]);
        
      
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };