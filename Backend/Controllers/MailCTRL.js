const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
  const { prenom, nom, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587, // Port sécurisé pour TLS/SSL
    auth: {
      user: '7a7024001@smtp-brevo.com',
      pass: 'yMgwEBThGW8HNrQb'
    },
    secure: false // True pour port 465, false pour port 587
  });

  const mailOptions = {
    from: 'Shiva <shiva@cyberflex.fr>',  // Expéditeur vérifié sur Brevo
    to: 'shiva@cyberflex.fr',
    subject: `Requête de ${prenom || "Prénom"} ${nom || "Nom"} <${email || "Adresse e-mail manquante"}> via le formulaire de contact`,
    text: message || "Message vide",  // Ajout de valeur par défaut si le message est vide
    replyTo: email || 'no-reply@cyberflex.fr'  // Ajout d'un email de réponse par défaut
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email: ' + error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
};
