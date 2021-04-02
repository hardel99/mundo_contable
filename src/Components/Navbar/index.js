import React from 'react'
import 
{
    Nav, 
    NavbarContainer, 
    NavLogo
} from './NavbarElements'


const Navbar = () => {
    return (
        
        <Nav>
            <NavbarContainer>
                <NavLogo to = '/'>Logo</NavLogo>
                <NavLogo to = '/'>Home</NavLogo>
                <NavLogo to = '/'>Sign up</NavLogo>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
