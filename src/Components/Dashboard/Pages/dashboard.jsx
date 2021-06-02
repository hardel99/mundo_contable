import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Plans from "../Pages/Plans"
import Settings from "../Pages/Settings"
import styled from 'styled-components';


 
 const Dashboard = () => { 
     return(
     <>
       <Navbar/>
       <Flex>
          <Sidebar/>
          
          <Content>
          <Switch>
          
          <Route path="/plans" exact={true} component={Plans}/>
          
          <Route path="/settings" exact={true} component={Settings }/>
          
          </Switch>
          </Content>       
        </Flex>
    </>
     )}

export default Dashboard

const Content = styled.div `
width: 100%;
border: 2px solid red;
`
const Flex = styled.div `
width: 100%;
display: flex;
`