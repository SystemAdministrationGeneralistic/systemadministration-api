const Sale = require('../model/saleModel');
const Supplier= require('../model/supplierModel')
const Category = require('../model/categoryModel')

  exports.getAllSale = async (req, res) => {
    try {
      const sales = await Sale.findAll({
        include: [
          { model: Supplier, attributes: ['bussinessName'] }, // Incluir información del proveedor
          { model: Category, attributes: ['name'] } // Incluir información de la categoría
        ]
      });    
      res.status(200).json(sales);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.getSaleById = async (req, res) => {
    const {id}=req.params
    try {
      const sale = await Sale.findByPk(id,{
        include: [
          { model: Supplier, attributes: ['bussinessName'] }, // Incluir información del proveedor
          { model: Category, attributes: ['name'] } // Incluir información de la categoría
        ]
      });     
      res.status(200).json(sale);
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.createSale = async (req, res) => {

    req.body.creationDate=new Date()
    req.body.modificationDate=new Date()
    try {
      await Sale.create(req.body);
       
        res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.updateSale = async (req, res) => {
   
    try {
      const sale = await Sale.findByPk(req.body.id);
    if (sale) {
      req.body.id=undefined
      await sale.update(req.body);
    }
          
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };

  exports.deleteSale = async (req, res) => {
    const {id}=req.params
    try {
      const sale = await Sale.findByPk(id);
    if (sale) {
      await sale.destroy();
    }
      
      res.status(200).send('OK');
    } catch (error) {
      console.error('Error en la consulta a la base de datos:', error.message);
      res.status(500).send('Error interno del servidor');
    }
  };