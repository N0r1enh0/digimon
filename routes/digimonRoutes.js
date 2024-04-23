// routes/digimonRoutes.js

const express = require('express');
const router = express.Router();
const digimonController = require('../controllers/digimonController');

// Rota para criar um novo Digimon
router.post('/digimons', digimonController.criarDigimon);

// Outras rotas para ler, atualizar e apagar Digimons

module.exports = router;
