// This code was left in for future development. We hope to be able to link tables and refer to user input to offer suggestions for goals.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mood extends Model {}

Mood.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    mood_overall: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    anxiety: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    happiness: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    chill: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'mood',
  }
);

module.exports = Mood;
