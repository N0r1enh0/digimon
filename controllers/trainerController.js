// controllers/trainerController.js

const Trainer = require('../models/trainerModel');

// Função para criar um novo Treinador
async function criarTreinador(req, res) {
  try {
    const { nome } = req.body;
    const novoTreinador = await Trainer.create({ nome });
    res.status(201).json(novoTreinador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Outras funções para ler, atualizar e apagar Treinadores

module.exports = {
  criarTreinador,
  // exportar outras funções aqui
};
