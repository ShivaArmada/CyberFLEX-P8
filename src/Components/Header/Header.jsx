import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../Assets/CompanyLogo.png";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu();
    };

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
        <header>
            <img src={Logo} alt="Company-Logo" className="Logo-Company" />
            {menuVisible ? (
                <button className="cross" onClick={toggleMenu}>&#735;</button>
            ) : (
                <div>
                    <button className="hamburger--menu" onClick={toggleMenu}>MENU</button>
                    <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
                </div>
            )}
            {menuVisible && (
                <div className={`menu ${menuVisible ? 'menuVisible' : ''}`}>
                    <ul>
                        <a href="/" ><li>ACCUEIL</li></a>
                        <a href="#works" onClick={(e) => scrollToSection(e, '#works')}><li>REALISATIONS</li></a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}><li>CONTACT</li></a>
                        <a href="/tarif" onClick={toggleMenu}><li>TARIFICATION</li></a>
                        <a href="/mentions" onClick={toggleMenu}><li>MENTIONS LEGALES</li></a>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;