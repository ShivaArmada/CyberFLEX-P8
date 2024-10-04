import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; // Importation de l'icône fa-arrow-up
import "./Footer.css";
import logobw from "../../Assets/bwlogo.webp";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("Votre adresse e-mail");
  const [validationStatus, setValidationStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch("https://backend-cyberflex.onrender.com/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          setValidationStatus('newsletter-success');
        } else {
          setValidationStatus('newsletter-failure');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Erreur:", error);
        setValidationStatus('newsletter-failure');
      });
  };

  return (
    <form className="News--form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="newsletter--input"
        placeholder={placeholder}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("Votre adresse e-mail")}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        itemProp="email"
      />
      {loading ? (
        <div className="loading-bar"></div>
      ) : (
        <button type="submit" className="newsletter--button">
          Newsletter
        </button>
      )}
      <div className="status-container">
        {validationStatus && (
          <div className={`${validationStatus} show`}>
            {validationStatus === 'newsletter-success' ? 'Vous êtes inscrit à la newsletter !' : "Échec lors de l'inscription. Veuillez réessayer."}
          </div>
        )}
      </div>
    </form>
  );
}

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.Footer-ensemble');
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.body.offsetHeight - 100; 

      if (scrollPosition >= threshold) {
        footer.classList.add('slide-up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer itemScope itemType="http://schema.org/WPFooter">
      <div className="Footer-ensemble" itemScope itemType="http://schema.org/Organization">
        <span className="Back--top" onClick={scrollToTop}>
          <a className="back-to-top">
            <FontAwesomeIcon icon={faArrowUp} className="top-arrow" />
          </a>
        </span>
        <div className="milieu-footer">
          <img src={logobw} alt="logo-company-black-white" loading="lazy" itemProp="logo" />
        </div>
        <div className="droite-footer">
          <a href="https://app.voxiplan.com/s/9991590578" className="horaires-link">
            <p>Horaires: 9h-12h / 14h-18h <span className="logo--voxiplan"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></p>
          </a>
          <p itemProp="url">www.cyberflex.fr</p>
          <NewsletterForm />
          <span className="svg-footer-social">
            <a href="https://www.facebook.com/profile.php?id=61563887240558" target="blank" itemProp="sameAs">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href="https://x.com/ArmadaShiva" target="blank" itemProp="sameAs">
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/cyberflex/" target="blank" itemProp="sameAs">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/ShivaArmada" target="blank" itemProp="sameAs">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </span>
        </div>

        <div className="bas-footer">
          <p>
            <span id="copyright">©</span> <span itemProp="copyrightYear">2024</span> <span itemProp="name">CyberFLEX</span> - Tout droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;