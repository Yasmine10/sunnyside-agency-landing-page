import React, { useState } from "react";

import hamburgerIcon from "../assets/images/icon-hamburger.svg";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => setToggleMenu(!toggleMenu);
    const closeMobileMenu = () => setToggleMenu(false);

    return (
        <div className="navbar container">
            <div className="logo-container">
                <a href="#home">
                    <h3 className="brand-title">sunnyside</h3>
                </a>
            </div>
            <div className="mobile-menu" onClick={handleToggleMenu}>
                <img
                    src={hamburgerIcon}
                    alt="Hamburger icon"
                    className="menu-icon"
                />
            </div>
            <div className="nav-content">
                <ul
                    className={
                        toggleMenu
                            ? "nav-links show-nav container"
                            : "nav-links container"
                    }
                >
                    <li className="nav-link" onClick={closeMobileMenu}>
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-link" onClick={closeMobileMenu}>
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav-link" onClick={closeMobileMenu}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li
                        className="nav-link contact-link"
                        onClick={closeMobileMenu}
                    >
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
