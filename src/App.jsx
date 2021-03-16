import React from 'react';
import './App.module.css';
import Navbar from './components/navbar/navbar'
import {BrowserRouter as Router} from 'react-router-dom';


function App() { 
  return(
    <Router>
      <Navbar/> 
    </Router>
  );
}

export default App;
