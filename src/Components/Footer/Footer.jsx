import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-ensemble">
        <div className="gauche-footer">
          <p>
            <a href="https://www.google.fr/maps/place/62960+Ligny-l%C3%A8s-Aire/@50.5633199,2.3001982,13z/data=!3m1!4b1!4m6!3m5!1s0x47dd040e08689957:0x40af13e8163e590!8m2!3d50.559358!4d2.350408!16s%2Fm%2F02z7gby?entry=ttu" target="blank">
              04 impasse de vignacourt / Ligny-lès-aires
            </a>
          </p>
          <p>
            <a href="tel:+33641874389">06 41 87 43 89</a>
          </p>
          <p>
            <a href="mailto:shiva@cyberflex.fr">shiva@cyberflex.fr</a>
          </p>
        </div>
        <div className="droite-footer">
          <p>Horaires: 9h-12h / 14h-18h</p>
          <p>www.cyberflex.fr</p>
          <form>
            <input
              type="email"
              className="newsletter--input"
              placeholder="Votre adresse e-mail"
              required
            />
            <button type="submit" className="newsletter--button">
              S&apos;inscrire
            </button>
          </form>
          <span className="svg-footer-social">
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
            <FontAwesomeIcon icon="fa-brands fa-square-github" />
          </span>
        </div>

        <div className="bas-footer">
          <p>© 2024 - Tout droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
