const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
  const { prenom, nom, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025, // Port par défaut pour MailHog
    secure: false
  });

  const mailOptions = {
    from: email,
    to: 'shiva@cyberflex.fr',
    subject: `Requête de ${prenom} ${nom} ${email} via le formulaire de contact`,
    text: message
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