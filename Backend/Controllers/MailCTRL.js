const nodemailer = require('nodemailer');
const axios = require('axios');

function createMailOptions(from, to, subject, text, replyTo) {
  return {
    from,
    to,
    subject,
    text,
    replyTo: replyTo || 'no-reply@cyberflex.fr'
  };
}

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

  const mailOptions = createMailOptions(
    'Shiva <shiva@cyberflex.fr>',
    'shiva@cyberflex.fr',
    `Requête de ${prenom || "Prénom"} ${nom || "Nom"} <${email || "Adresse e-mail manquante"}> via le formulaire de contact`,
    message || "Message vide",
    email
  );

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

  console.log("Nouvelle inscription à la newsletter:", email);

  const apiKey = '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';
  const templateId = 1;

  const data = {
    to: [{ email }],
    templateId: templateId,
    params: {
      from: 'CyberFLEX <planckaertg@gmail.com>',
      subject: 'Bienvenue chez CyberFLEX ! 🤖',
      // Ajoutez ici les paramètres nécessaires pour votre template
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
    

    const mailOptions = createMailOptions(
      'Shiva <shiva@cyberflex.fr>',
      'shiva@cyberflex.fr',
      `Nouvelle inscription à la newsletter: ${email}`,
      `Un nouvel utilisateur s'est inscrit à la newsletter avec l'email: ${email}`,
      email
    );

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