// This code was left in for future development. We hope to be able to link tables and refer to user input to offer suggestions for goals.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Water extends Model {}

  Water.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      waterConsumed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      goals:
      {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'water',
    }
  );
  
  module.exports = Water;