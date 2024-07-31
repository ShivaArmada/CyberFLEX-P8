import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logobw from "../../Assets/bwlogo.png";

const Footer = () => {
  const [placeholder, setPlaceholder] = useState("Votre adresse e-mail");

  return (
    <footer>
      <div className="Footer-ensemble">
        <div className="gauche-footer">
          <p>
            <a
              href="https://www.google.fr/maps/place/62960+Ligny-l%C3%A8s-Aire/@50.5633199,2.3001982,13z/data=!3m1!4b1!4m6!3m5!1s0x47dd040e08689957:0x40af13e8163e590!8m2!3d50.559358!4d2.350408!16s%2Fm%2F02z7gby?entry=ttu"
              target="blank"
            >
              4 impasse de vignacourt / Ligny-lès-aires
            </a>
          </p>
          <p>
            <a href="tel:+33641874389">06 41 87 43 89</a>
          </p>
          <p>
            <a href="mailto:shiva@cyberflex.fr">shiva@cyberflex.fr</a>
          </p>
        </div>
        <div className="milieu-footer">
          <a href="/mentions">
            <p>Politique de confidentialité</p>
          </a>
          <img src={logobw} alt="logo-company-black-white" />
        </div>
        <div className="droite-footer">
          <a href="https://app.voxiplan.com/s/9991590578">
            <p>Horaires: 9h-12h / 14h-18h</p>
          </a>
          <p>www.cyberflex.fr</p>
          <form className="News--form">
            <input
              type="email"
              className="newsletter--input"
              placeholder={placeholder}
              onFocus={() => setPlaceholder("")}
              onBlur={() => setPlaceholder("Votre adresse e-mail")}
              required
            />
            <button type="submit" className="newsletter--button">
              Newsletter
            </button>
          </form>
          <span className="svg-footer-social">
            <a href="https://www.facebook.com/profile.php?id=61563887240558">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href="https://x.com/ArmadaShiva">
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/cyberflex/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/ShivaArmada">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </span>
        </div>

        <div className="bas-footer">
          <p>
            <span id="copyright">©</span> 2024 CyberFLEX - Tout droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
