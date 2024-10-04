import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: '',
    confirmation: false
  });
  const [validationStatus, setValidationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.confirmation) {
      setValidationStatus('failure');
      return;
    }

    try {
      const response = await fetch('https://backend-cyberflex.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setValidationStatus('success');
      } else {
        setValidationStatus('failure');
      }
    } catch (error) {
      console.error('Error:', error);
      setValidationStatus('failure');
    }
  };

  return (
    <div className="contact__section" itemScope itemType="http://schema.org/ContactPoint">
      <div className="contact__panel">
        <div className="contact__panel--header">
          <h3 className="contact__panel--message">
            <FontAwesomeIcon icon={faEnvelope} className="contact__panel--logo" id="contact"/>
            <span itemProp="contactType">Contactez-moi</span>
          </h3>
          <p>
            Les informations envoyées via ce formulaire sont utilisées pour vous
            recontacter. Elles ne sont pas stockées dans une base de données et
            ne sont pas utilisées à des fins commerciales ou publicitaires.
          </p>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} itemProp="contactOption">
          <fieldset id="contact__form--field">
            <div className="contact__form--row">
              <div className="contact__form--prenom">
                <label htmlFor="prenom">
                  <h3><span className="red-asterisk">*</span> Prénom</h3>
                </label>
                <input
                  type="text"
                  id="prenom"
                  placeholder="Pierre"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  itemProp="givenName"
                />
              </div>
              <div className="contact__form--nom">
                <label htmlFor="nom">
                  <h3><span className="red-asterisk">*</span> Nom</h3>
                </label>
                <input
                  type="text"
                  id="nom"
                  placeholder="Henry"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  itemProp="familyName"
                />
              </div>
            </div>

            <div className="contact__form--email">
              <label htmlFor="email">
                <h3><span className="red-asterisk">*</span> Email</h3>
              </label>
              <input
                type="email"
                id="email"
                placeholder="pierre.henry@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                itemProp="email"
              />
            </div>
            <div className="contact__form--textarea">
              <label htmlFor="message">
                <h3><span className="red-asterisk">*</span> Message</h3>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Votre message...."
                maxLength="300"
                value={formData.message}
                onChange={handleChange}
                required
                itemProp="message"
              ></textarea>
            </div>
            <div className="contact__form--confirmation">
              <label htmlFor="check">
                j&apos;accepte de soumettre mes informations personelles via ce
                formulaire.
              </label>
              <input
                type="checkbox"
                id="check"
                name="confirmation"
                checked={formData.confirmation}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>
          <button 
            type="submit" 
            className={validationStatus === 'success' ? 'btn-success' : validationStatus === 'failure' ? 'btn-failure' : ''}
          >
            Envoyer
          </button>
          {validationStatus && (
            <span className={validationStatus === 'success' ? 'text-success' : 'text-failure'}>
              {validationStatus === 'success' ? 'Validation' : 'Échec'}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;