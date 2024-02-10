const Product = require('../model/productModel');
const Supplier= require('../model/supplierModel')
const Category = require('../model/categoryModel')

  exports.getAllProduct = async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [
          { model: Supplier, attributes: ['bussinessName'] }, // Incluir información del proveedor
          { model: Category, attributes: ['name'] } // Incluir información de la categoría
        ]
      });    
      res.status(200).json(products);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.getProductById = async (req, res) => {
    const {id}=req.params
    try {
      const product = await Product.findByPk(id,{
        include: [
          { model: Supplier, attributes: ['bussinessName'] }, // Incluir información del proveedor
          { model: Category, attributes: ['name'] } // Incluir información de la categoría
        ]
      });     
      res.status(200).json(product);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.createProduct = async (req, res) => {
   console.log(req.body)

    req.body.creationDate=new Date()
    req.body.modificationDate=new Date()
    try {
      await Product.create(req.body);
       
        res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.updateProduct = async (req, res) => {
   
    try {
      const product = await Product.findByPk(req.body.id);
    if (product) {
      req.body.id=undefined
      await product.update(req.body);
    }
          
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.deleteProduct = async (req, res) => {
    const {id}=req.params
    try {
      const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
    }
      
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };