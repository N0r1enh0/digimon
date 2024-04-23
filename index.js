// index.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utils/database');
const server = express();
const PORT = process.env.PORT || 3000;

// Importar rotas
const digimonRoutes = require('./routes/digimonRoutes');
const equipaRoutes = require('./routes/equipaRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

// Configurar o body parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Conectar ao banco de dados
db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Usar rotas
server.use('/digimon', digimonRoutes);
server.use('/equipa', equipaRoutes);
server.use('/trainer', trainerRoutes);

// Rota de teste
server.get('/', (req, res) => {
  res.send('Seu servidor está rodando!');
});

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
