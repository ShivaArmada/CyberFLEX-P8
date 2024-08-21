const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const port = process.env.PORT || 5000; // Utilisez le port défini dans les variables d'environnement ou 5000 par défaut

// Utilisez le middleware CORS
app.use(cors());

// Autres middlewares et routes
app.use(express.json());
const Mailrouter = require('./Routes/MailRoute'); // Assurez-vous que ce chemin est correct
app.use('/api', Mailrouter);

// Route de placeholder
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const message = 'It works!\n';
  const version = 'NodeJS ' + process.versions.node + '\n';
  const response = [message, version].join('\n');
  res.end(response);
});

// Créez le serveur HTTP et intégrez l'application Express
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});