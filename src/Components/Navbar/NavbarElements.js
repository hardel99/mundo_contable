import styled from 'styled-components'

import {Link as LinkR } from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index:10; 
`
export const NavbarContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   height:100%;
   z-index:1;
   width: 100%;
   max-width:1100px;
`

export const NavLogo = styled(LinkR)`
 color:white;
 justify-self: flex-start;
 cursor: pointer;
 font-size:1.5rem;
 align-items:center;
 font-weight:bold;
 text-decoration:none;
`

