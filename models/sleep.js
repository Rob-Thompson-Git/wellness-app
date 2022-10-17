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
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
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
  