const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../dbConection/db');
const Supplier= require('./supplierModel')
const Category = require('./categoryModel')

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modificationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codArt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'Product',
    timestamps: false
  }
);
Product.belongsTo(Supplier, { foreignKey: 'supplierId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });
module.exports = Product;


