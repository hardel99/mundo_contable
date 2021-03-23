import React, {useState} from 'react';
import  {Button} from './navbarComponents/button';
import { Link } from 'react-router-dom'
import './navbar.css';
import Dropdown from './navbarComponents/dropdown';
import logo from '../img/LOGOMC.png'

function Navbar (){

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobilMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.ineerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.ineerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                <img src={logo} width={40} height={40} />
                </Link>
                <div className='Menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}> {/*nav-menu}
                    {/* Here begin the sections inside the navbar */}
                    <li className='nav-item'>
                            <Link to='/' className = 'nav-links' onClick={closeMobilMenu}> {/*nav-links*/}
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                            <Link to='/services' className = 'nav-links' onClick={closeMobilMenu}>
                                Servicios <i className='fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-item'>
                            <Link to='/Products' className = 'nav-links' onClick={closeMobilMenu}>
                                Nosotros
                            </Link>   
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact-us' className = 'nav-links' onClick={closeMobilMenu}>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className = 'nav-links-mobile' onClick={closeMobilMenu}>
                                Registrarse
                            </Link>
                        </li>
                    {/* Here ending the sections inside the navbar */}
                    </ul> 
                    <li className='nav-ingresar'>
                        <Link to='/log-in' className = 'nav-links' onClick={closeMobilMenu}>
                        Log in
                        </Link>
                    </li>
                    <Button></Button>
            </nav>
        </>
    );
}

export default Navbar;


