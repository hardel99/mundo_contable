import React, { useState } from "react";
import "./navbarComponents/button.css";
import "./navbar.css";
import Modal from '../Auth/screenModal';
import logo from "../img/LOGOMC.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [action, setAction] = useState('');

    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const openModal = () => {
        setShowModal (prev => !prev);
    };

    const loginClicked = () => {
        setAction('Login');
    }

    const signUpClicked = () => {
        setAction('');
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <a href="#" className="navbar-logo">
                    <img src={logo} width={40} height={40} alt={"MundoCOntablesLogo"}/>
                </a>
                <div className="Menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={closeMobilMenu}>
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='#s2' className="nav-links" onClick={closeMobilMenu}>
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#s1" className="nav-links" onClick={closeMobilMenu}>
                            Nosotros
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#s3" className="nav-links" onClick={closeMobilMenu}>
                            Contactos
                        </a>
                    </li>
                </ul>
                    <li className="nav-log">
                        <button className="nav-links-log" onClick={() => {openModal() ; loginClicked()}} >
                            Log in
                        </button>
                    </li>
                    <button className='btn' onClick={ () => {openModal() ; signUpClicked()}}>
                    Registrarse
                    </button>
                    <Modal showModal={showModal} setShowModal={setShowModal} action={action} setAction={setAction}/>
            </nav>
        </>
    );
}

export default Navbar;
