const express = require('express');
const sendmail = require('../Controllers/MailCTRL'); // Chemin mis à jour

const Mailrouter = express.Router();

Mailrouter.post('/send-email', sendmail.sendEmail); // Utiliser le contrôleur pour envoyer un email
Mailrouter.post('/subscribe', sendmail.subscribeNewsletter); // Utiliser le contrôleur pour s'inscrire à la newsletter

module.exports = Mailrouter;