// controllers/digimonController.js

const Digimon = require('../models/digimonModel');

// Função para criar um novo Digimon
async function criarDigimon(req, res) {
  try {
    const { nome, tipo1, tipo2 } = req.body;
    const novoDigimon = await Digimon.create({ nome, tipo1, tipo2 });
    res.status(201).json(novoDigimon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Outras funções para ler, atualizar e apagar Digimons

module.exports = {
  criarDigimon,
  // exportar outras funções aqui
};
