import React from "react";
import { Link} from "react-router-dom";
import styled from 'styled-components'
import Button from '@material-ui/core/Button';



function Sidebar () {

return (
  <SidebarParent>
    <ul>
    
      <li>
          <Link to="/"> Home </Link>
      </li>
      
      <li>   
          <Link to="/settings"> Settings </Link>
      </li>
      
      <li>
          <Link to="/Plans"> Plans </Link>
      </li>
      
      <li>
          <Link to=""> Salir </Link>
      </li>
      
      <li>
          <Button variant="contained" color="primary">
            Hola Mundo!
          </Button>
      </li>
    
    </ul>
  
  </SidebarParent>
);
}

export default  Sidebar

const SidebarParent = styled.div`
    background: #ffffff;
    width: 14rem;
    height: calc(100vh - 52px);
    border-right: 1px solid gray;
    padding: 40px;
`;