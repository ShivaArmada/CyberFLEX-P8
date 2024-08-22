const http = require('http');
const express = require('express');
const path = require('path');
const app = require('./app'); // Importez votre app.js

const hostname = 'uk2.fcomet.com'; // Adresse du serveur
const port = process.env.PORT || 5000; // Utilisez le port défini dans les variables d'environnement ou 5000 par défaut

// Servez les fichiers statiques du dossier 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Gérer toutes les autres routes en renvoyant le fichier index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Créez le serveur HTTP et intégrez l'application Express
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});