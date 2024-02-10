const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../dbConection/db');

class Sale extends Model {}

Sale.init(
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
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IVA: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Sale',
    tableName: 'Sale',
    timestamps: false
  }
);

module.exports = Sale;