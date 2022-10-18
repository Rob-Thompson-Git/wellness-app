// This code was left in for future development. We hope to be able to link tables and refer to user input to offer suggestions for goals.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

  Sleep.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'sleep',
    }
  );
  
  module.exports = Sleep;
  