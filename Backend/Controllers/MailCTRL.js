const nodemailer = require('nodemailer');
const axios = require('axios');

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

exports.subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  // Assurez-vous de loguer l'email pour débugger si besoin
  console.log("Nouvelle inscription à la newsletter:", email);

  // Utilisation de l'API de Brevo pour envoyer un email basé sur un template
  const apiKey = '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'; // Votre clé API Brevo
  const templateId = 1; // ID de votre template

  const data = {
    to: [{ email }],
    templateId: templateId,
    params: {
      // Ajoutez ici les paramètres de votre template
      // Par exemple, si votre template utilise {{name}}, vous pouvez passer { name: 'John' }
    }
  };

  try {
    // Envoi de l'email de confirmation à l'utilisateur
    const response = await axios.post('https://api.brevo.com/v3/smtp/email', data, {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    console.log('Email de confirmation envoyé:', response.data);

    // Envoi d'un email à vous-même avec l'objet contenant l'email de l'utilisateur
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      auth: {
        user: '7a7024001@smtp-brevo.com',
        pass: 'yMgwEBThGW8HNrQb'
      },
      secure: false
    });

    const mailOptions = {
      from: 'Shiva <shiva@cyberflex.fr>',
      to: 'shiva@cyberflex.fr',
      subject: `Nouvelle inscription à la newsletter: ${email}`,
      text: `Un nouvel utilisateur s'est inscrit à la newsletter avec l'email: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'email à vous-même:', error);
        return res.status(500).send('Erreur lors de l\'inscription à la newsletter: ' + error.toString());
      }
      console.log('Email de notification envoyé à vous-même:', info.response);
      res.status(200).send('Inscription à la newsletter réussie.');
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).send('Erreur lors de l\'inscription à la newsletter: ' + error.toString());
  }
};