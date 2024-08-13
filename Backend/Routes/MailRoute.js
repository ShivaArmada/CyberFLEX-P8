const express = require('express');
const sendmail = require('../Controllers/MailCTRL'); // Chemin mis à jour

const Mailrouter = express.Router();

Mailrouter.post('/send-email', sendmail.sendEmail); // Utiliser le contrôleur

module.exports = Mailrouter;