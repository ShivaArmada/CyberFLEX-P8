const express = require('express');
const bodyParser = require('body-parser');
const Mailrouter = require('./Routes/MailRoute.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utiliser les routes définies dans routes.js
app.use('/api', Mailrouter);

module.exports = app;