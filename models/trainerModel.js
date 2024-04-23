// models/trainerModel.js

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/database');

const Trainer = db.define('Trainer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Trainer;
