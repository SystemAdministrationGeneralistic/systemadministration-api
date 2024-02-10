const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../dbConection/db');

class Supplier extends Model {}

Supplier.init(
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
    bussinessName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cuit: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Supplier',
    tableName: 'Supplier',
    timestamps: false
  }
);

module.exports = Supplier;