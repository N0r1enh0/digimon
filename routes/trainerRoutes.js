// routes/trainerRoutes.js

const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

// Rota para criar um novo Treinador
router.post('/trainers', trainerController.criarTreinador);

// Outras rotas para ler, atualizar e apagar Treinadores

module.exports = router;
