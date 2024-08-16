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
import logobw from "../../Assets/bwlogo.png";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("Votre adresse e-mail");

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    fetch("http://localhost:5000/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Vous êtes inscrit à la newsletter !");
        } else {
          alert("Erreur lors de l'inscription. Veuillez réessayer.");
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
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
      />
      <button type="submit" className="newsletter--button">
        Newsletter
      </button>
    </form>
  );
}

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="Footer-ensemble">
        <span className="Back--top" onClick={scrollToTop}>
          <a className="back-to-top">
            <FontAwesomeIcon icon={faArrowUp} className="top-arrow" />
          </a>
        </span>
        <div className="milieu-footer">
          <img src={logobw} alt="logo-company-black-white" />
        </div>
        <div className="droite-footer">
          <a href="https://app.voxiplan.com/s/9991590578" className="horaires-link">
            <p>Horaires: 9h-12h / 14h-18h <span className="logo--voxiplan"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></p>
          </a>
          <p>www.cyberflex.fr</p>
          <NewsletterForm />
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