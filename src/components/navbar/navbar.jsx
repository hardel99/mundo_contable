import React, {useState} from 'react'
import  {Button} from './navbarComponents/button';
import { Link } from 'react-router-dom'
import './navbar.css';
import Dropdown from './navbarComponents/dropdown';

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
                   MUNDO CONTABLES
                </Link>
                <div className='Menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className = 'nav-links' onClick={closeMobilMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                            <Link to='/services' className = 'nav-links' onClick={closeMobilMenu}>
                                Services <i className='fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact-us' className = 'nav-links' onClick={closeMobilMenu}>
                                Contact us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className = 'nav-links-mobile' onClick={closeMobilMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>   
                <Button></Button>
            </nav>
        </>
    );
}

export default Navbar;


