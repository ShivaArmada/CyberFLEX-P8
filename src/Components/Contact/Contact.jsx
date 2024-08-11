import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact--section">
      <div className="contact--panel">
        <div className="contact--header">
          <h3 className="contact--message">
            <FontAwesomeIcon icon={faEnvelope} className="contact--logo" id="contact"/>
            Contactez-moi
          </h3>
          <p>
            Les informations envoyées via ce formulaire sont utilisées pour vous
            recontacter. Elles ne sont pas stockées dans une base de données et
            ne sont pas utilisées à des fins commerciales ou publicitaires.
          </p>
        </div>
        <form className="contact--form" >
          <fieldset>
            <div className="contact--row">
              <div className="contact--prenom">
                <label htmlFor="prenom">
                  <h3><span className="red-asterisk">*</span> Prénom</h3>
                </label>
                <input type="text" id="prenom" placeholder="Pierre" name="Prénom" />
              </div>
              <div className="contact--nom">
                <label htmlFor="nom">
                  <h3><span className="red-asterisk">*</span> Nom</h3>
                </label>
                <input type="text" id="nom" placeholder="Henry" name="Nom" />
              </div>
            </div>

            <div className="contact--email">
              <label htmlFor="email">
                <h3><span className="red-asterisk">*</span> Email</h3>
              </label>
              <input
                type="email"
                id="email"
                placeholder="pierre.henry@gmail.com"
                name="email"
              />
            </div>
            <div className="contact--textarea">
              <label htmlFor="message">
                <h3><span className="red-asterisk">*</span> Message</h3>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Votre message...."
                maxLength="300"
              ></textarea>
            </div>
            <div className="contact--confirmation">
            <label htmlFor="check">
                j&apos;accepte de soumettre mes informations personelles via ce
                formulaire.
              </label>
              <input type="checkbox" id="check" name="confirmation" />
            </div>
          </fieldset>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;