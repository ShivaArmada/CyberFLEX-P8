const express = require('express');
const bodyParser = require('body-parser');
const Mailrouter = require('./Routes/MailRoute.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utiliser les routes définies dans routes.js
app.use('/api', Mailrouter);

// Route de placeholder
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const message = 'It works!\n';
  const version = 'NodeJS ' + process.versions.node + '\n';
  const response = [message, version].join('\n');
  res.end(response);
});

module.exports = app;