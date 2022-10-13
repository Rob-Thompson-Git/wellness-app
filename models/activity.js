const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activity extends Model {}

  Activity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      exercise: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      effort: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      goals:
      {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'activity',
    }
  );
  
  module.exports = Activity;