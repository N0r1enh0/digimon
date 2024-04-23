// models/digimonModel.js

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/database');

const Digimon = db.define('Digimon', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  tipo1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Digimon;
