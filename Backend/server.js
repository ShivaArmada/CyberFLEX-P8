const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Use the CORS middleware
app.use(cors());

// Other middleware and routes
app.use(express.json());
const Mailrouter = require('./Routes/MailRoute'); // Assurez-vous que ce chemin est correct
app.use('/api', Mailrouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});