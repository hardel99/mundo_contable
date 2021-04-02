import React, { useState } from "react";
import { Button } from "./navbarComponents/button";
import "./navbar.css";
import logo from "../img/LOGOMC.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <a href="#" className="navbar-logo">
                    <img
                        src={logo}
                        width={40}
                        height={40}
                        alt={"MundoCOntablesLogo"}
                    />
                </a>
                <div className="Menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {" "}
                    {/*nav-menu}
                    {/* Here begin the sections inside the navbar */}
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-links"
                            onClick={closeMobilMenu}
                        >
                            {" "}
                            {/*nav-links*/}
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#info"
                            className="nav-links"
                            onClick={closeMobilMenu}
                        >
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#us"
                            className="nav-links"
                            onClick={closeMobilMenu}
                        >
                            Nosotros
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            className="nav-links"
                            onClick={closeMobilMenu}
                        >
                            Contacto
                        </a>
                    </li>
                    {/* Here ending the sections inside the navbar */}
                </ul>
                <li className="nav-log">Log in</li>
                <Button></Button>
            </nav>
        </>
    );
}

export default Navbar;
