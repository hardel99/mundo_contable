import React, {useState} from 'react'
import {Button} from './navbarComponents/button';
import { Link } from 'react-router-dom'
import './navbar.module.css';
import Dropdown from './navbarComponents/dropdown';

function Navbar (){
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                   MUNDO CONTABLES
                </Link>
            </nav>

        </>
    )
}

export default Navbar;