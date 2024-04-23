// models/equipaModel.js

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/database');

const Equipa = db.define('Equipa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  treinadorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  digimonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Equipa;
