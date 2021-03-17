import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './Components/GlobalStyles';
import Hero from './Components/HeroSection';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
    </Router>
   
  );
}

export default App;
