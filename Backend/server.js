const http = require('http');
const app = require('./app'); // Importez votre app.js

const port = process.env.PORT || 5000; // Utilisez le port défini dans les variables d'environnement ou 5000 par défaut

// Créez le serveur HTTP et intégrez l'application Express
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});