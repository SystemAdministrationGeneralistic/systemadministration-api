const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../dbConection/db');

class Category extends Model {}

Category.init(
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
    }
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'Category',
    timestamps: false
  }
);

module.exports = Category;