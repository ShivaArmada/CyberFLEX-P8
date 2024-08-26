import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../Assets/CompanyLogo.png";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();

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
        <header itemscope itemtype="http://schema.org/WPHeader">
            <img src={Logo} alt="Company-Logo" className="Logo-Company" loading="lazy" itemprop="logo" />
            {menuVisible ? (
                <button className="cross" onClick={toggleMenu}>&#735;</button>
            ) : (
                <div>
                    <button className="hamburger--menu" onClick={toggleMenu}>MENU</button>
                    <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
                </div>
            )}
            {menuVisible && (
                <div className={`menu ${menuVisible ? 'menuVisible' : ''}`} itemscope itemtype="http://schema.org/SiteNavigationElement">
                    <ul>
                        <a href="/" itemprop="url"><li itemprop="name">ACCUEIL</li></a>
                        {location.pathname === '/' && (
                            <>
                                <a href="#works" onClick={(e) => scrollToSection(e, '#works')} itemprop="url"><li itemprop="name">REALISATIONS</li></a>
                                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} itemprop="url"><li itemprop="name">CONTACT</li></a>
                            </>
                        )}
                        <a href="/tarif" onClick={toggleMenu} itemprop="url"><li itemprop="name">TARIFICATION</li></a>
                        <a href="/mentions" onClick={toggleMenu} itemprop="url"><li itemprop="name">MENTIONS LEGALES</li></a>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;