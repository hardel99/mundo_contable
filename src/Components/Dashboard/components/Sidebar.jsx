import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import styled from 'styled-components'


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