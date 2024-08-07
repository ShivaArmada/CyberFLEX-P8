import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.Footer-ensemble');
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.body.offsetHeight - 100; // Ajustez cette valeur selon vos besoins

      if (scrollPosition >= threshold) {
        footer.classList.add('slide-up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer>
      <div className="Footer-ensemble">
        <div className="milieu-footer">
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
            <a href="https://www.facebook.com/profile.php?id=61563887240558" target="blank">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href="https://x.com/ArmadaShiva" target="blank">
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/cyberflex/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/ShivaArmada" target="blank">
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