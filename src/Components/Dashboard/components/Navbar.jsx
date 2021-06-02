import styled from 'styled-components'


const Navbar = () => {
    return(
        <NavParent>
            Navbar
        </NavParent>
    )
}

export default Navbar 

const NavParent = styled.div `

    background-color:#fff;
    padding: 1rem 2rem;
    border-bottom: 1px solid #cfcfcf;
`