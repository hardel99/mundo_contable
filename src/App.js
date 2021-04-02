import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './Components/GlobalStyles';
import Hero from './Components/HeroSection';
import InfoSection from './Components/InfoSection';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
      <InfoSection/>
    </Router>
  );
}

export default App;
