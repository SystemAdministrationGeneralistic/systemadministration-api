const Category = require('../model/categoryModel')

  exports.getAllcategory = async (req, res) => {
    try {
      const category = await Category.findAll()     
      res.status(200).json(category);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.getcategoryById = async (req, res) => {
    const {id}=req.params
    try {
      const category = await Category.findByPk(id)    
      res.status(200).json(category);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.createcategory = async (req, res) => {
    
    try {
      req.body.creationDate=new Date()
    req.body.modificationDate=new Date()
      await Category.create(req.body);

       
        res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.updatecategory = async (req, res) => {
    const {name,id}=req.body;
    try {
      const category = await Category.findByPk(req.body.id);
    if (category) {
      req.body.id=undefined
      await category.update(req.body);
    }
          
          res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.deletecategory = async (req, res) => {
    const {id}=req.params
    try {
      const category = await Category.findByPk(id);
      if (category) {
        await category.destroy();
      }        
      
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };