import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/CompanyLogo.png";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header>
            <img src={Logo} alt="Company-Logo" className="Logo-Company" />
            {menuVisible ? (
                <button className="cross" onClick={toggleMenu}>&#735;</button>
            ) : (
                <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
            )}
            {menuVisible && (
                <div className={`menu ${menuVisible ? 'menuVisible' : ''}`}>
                    <ul>
                        <a href="/"><li>ACCUEIL</li></a>
                        <a href="/works"><li>REALISATIONS</li></a>
                        <a href="/contact"><li>CONTACT</li></a>
                        <a href="/about"><li>A PROPOS</li></a>
                        <a href="/mentions"><li>MENTIONS LEGALES</li></a>
                    </ul>

                </div>
            )}
        </header>
    );
};

export default Header;