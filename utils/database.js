// database.js

const { Sequelize } = require('sequelize');

// Configurações de conexão com o banco de dados
const sequelize = new Sequelize('nome_do_banco_de_dados', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar-se ao banco de dados:', err);
  });

module.exports = sequelize;
