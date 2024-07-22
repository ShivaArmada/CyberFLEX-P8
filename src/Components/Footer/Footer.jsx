import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <div>
                <div className='gauche-footer'>
                    <p>Adresse: 04 impasse de vignacourt / Ligny-lès-aires</p>
                    <p>Téléphone: 06 41 87 43 89</p>
                    <p>Email: shiva@cyberflex.fr </p>
                </div>
                <div className='droite-footer'>
                    <p>Horaires: 9h-12h / 14h-18h</p>
                    <p>www.cyberflex.fr</p>
                    <span className='svg-footer-social'>
                    <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
                    <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
                    <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
                    <FontAwesomeIcon icon="fa-brands fa-square-github" />
                    </span>
                </div>
                    
                <div className='bas-footer'>
                <p>© 2024 - Tout droits réservés</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;