import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './components/pages/Service'
import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import SignUp from './components/pages/SignUp'
import Home from './components/pages/Home'
import Marketing from './components/pages/Marketing'
import Consulting from './components/pages/Consulting'
import Login from './components/pages/Login'


function App() { 
  return(
    <Router>
      <Navbar/> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/service' exact component={Service}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/contact-us' exact component={ContactUs}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/marketing' exact component={Marketing}/>
        <Route path='/consulting' exact component={Consulting}/>
        <Route path='/log-in' exact component={Login}/>

      </Switch>
    </Router>
  );
}

export default App;
