const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class toDoList extends Model {}

 toDoList.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      toDo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      inProgress: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      isFinished: {
        type: DataTypes.BOOLEAN,
        allowNull: true, 
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'to_do_list',
    }
  );
  
  module.exports = toDoList;