// server.js

const express = require('express');
const oauth2orize = require('oauth2orize');
const server = express();
const bodyParser = require('body-parser');

// Configurar o body parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Simulação de dados de usuários e clientes
const trainers = [
  { id: 1, username: 'treinador1', password: 'senha1' },
  { id: 2, username: 'treinador2', password: 'senha2' }
];

const clients = [
  { id: 'cliente1', secret: 'segredo1', redirectURI: 'http://localhost:3000/callback' }
];

// Criar um servidor OAuth 2.0
const oauthServer = oauth2orize.createServer();

// Configurar os endpoints OAuth 2.0
server.post('/oauth/token', oauthServer.token());

// Registrar clientes OAuth 2.0
oauthServer.serializeClient((client, done) => {
  done(null, client.id);
});

oauthServer.deserializeClient((id, done) => {
  const client = clients.find(c => c.id === id);
  done(null, client);
});

// Definir a lógica de concessão de senha (password grant)
oauthServer.grant(oauth2orize.grant.password((client, username, password, done) => {
  const trainer = trainers.find(t => t.username === username && t.password === password);
  if (!trainer) { return done(null, false); }
  done(null, trainer.id);
}));

// Middleware de autenticação OAuth 2.0
const authenticate = oauthServer.authenticate();

// Rota protegida que requer autenticação OAuth 2.0
server.get('/protected', authenticate, (req, res) => {
  res.send('Recurso protegido');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
