const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  hours: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  quality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  {
    sequelize, 
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: "sleep",
  }
});

module.exports = Sleep;
