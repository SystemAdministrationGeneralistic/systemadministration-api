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
      res.status(200).json({
        status:'Ok',
        data:products,
        messagge:"successfully"
      });
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
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
      res.status(200).json({
        status:'Ok',
        data:product,
        messagge:"successfully"
      });
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.createProduct = async (req, res) => {

    req.body.creationDate=new Date()
    req.body.modificationDate=new Date()
    try {
      await Product.create(req.body);
       
      res.status(200).json({
        status:'Ok',
        data:category,
        messagge:"successfully"
      });
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.updateProduct = async (req, res) => {
   
    try {
      const product = await Product.findByPk(req.body.id);
    if (product) {
      req.body.id=undefined
      await product.update(req.body);
    }else {
      res.status(200).send({
        status:'error',
        data:null,
        messagge:"No se puede actualizar, no existe el producto"
      })
    }
          
    res.status(200).json({
      status:'Ok',
      data:null,
      messagge:"successfully"
    });
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };

  exports.deleteProduct = async (req, res) => {
    const {id}=req.params
    try {
      const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
    }else {
      res.status(200).send({
        status:'error',
        data:null,
        messagge:"No se puede eliminar, no existe el producto"
      })
    }       
    res.status(200).json({
      status:'Ok',
      data:null,
      messagge:"successfully"
    });
    } catch (error) {
      res.status(500).send({
        status:'error',
        data:null,
        messagge:error.message
      });
    }
  };