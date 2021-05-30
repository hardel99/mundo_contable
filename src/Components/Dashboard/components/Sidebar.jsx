import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import "../components/sidebar.scss"
import SidebarItems from "../components/SidebarItems";


const SidebarParent = styled.div`

  background: #c34a36;
  width: 14rem;
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 2px;

  p {
    color: white;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #9c3d2c;
  }
`;

function Sidebar(props, {defaultActive}) {  
    //If no active prop is passed, use `1` instead
    const [activeIndex,] = useState (defaultActive || 1);
    return (
        <>
          <SidebarParent>
              {
                SidebarItems.map((item, index) => {
                  return (
                    <Link to={item.route}> 
                      <SidebarItem key={item.name} active={index === activeIndex}>
                        <p> {item.name} </p>
                      </SidebarItem>
                    </Link>
                  ); 
                  })    
              }
                  
          </SidebarParent>
        </>
    );
}

export default Sidebar;



