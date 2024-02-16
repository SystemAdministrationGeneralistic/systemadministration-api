const Category = require('../model/categoryModel')
const Product = require('../model/productModel');

  exports.getAllcategory = async (req, res) => {
    try {
      const category = await Category.findAll()     
      res.status(200).json({
        status:'Ok',
        data:category,
        messagge:"successfully"
      });
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.getcategoryById = async (req, res) => {
    const {id}=req.params
    try {
      const category = await Category.findByPk(id)    
      res.status(200).json({
        status:'Ok',
        data:category,
        messagge:"successfully"
      });
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.createcategory = async (req, res) => {
    
    try {
      req.body.creationDate=new Date()
      req.body.modificationDate=new Date()
      await Category.create(req.body);
       
        res.status(200).send({
          status:'Ok',
          data:null,
          messagge:"successfully"
        });
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.updatecategory = async (req, res) => {
    const {name,id}=req.body;
    try {
      const category = await Category.findByPk(req.body.id);
    if (category) {
      req.body.id=undefined
      await category.update(req.body);
    }else{
      res.status(200).send({
        status:'Ok',
        data:null,
        messagge:"No se encontro la categoria que se quiere editar"
      });
    }
          
      res.status(200).send('OK');
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.deletecategory = async (req, res) => {
    const {id}=req.params
    try {
      const allProduct = await Product.findAll()
      const anyProductWithCategory= allProduct.some(p=>p.categoryId === id)
      if(anyProductWithCategory){
        res.status(200).send({
          status:'Ok',
          data:null,
          messagge:"No se puede eliminar, tiene un producto asociado"
        })
      }
      const category = await Category.findByPk(id);
      if (category) {
        await category.destroy();
      } else {
        res.status(200).send({
          status:'error',
          data:null,
          messagge:"No se puede eliminar, no existe la categoria"
        })
      } 
      
      res.status(200).send({
        status:'Ok',
        data:null,
        messagge:"se elimino la categoria correctamente"
      });
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };