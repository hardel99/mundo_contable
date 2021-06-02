import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./app/auth/AuthContext";
import ForgotPassword from "./Components/Auth/restorePass";
import PrivateRoute from "./app/auth/PrivateRoute";
import { GlobalStyle } from "./Components/GlobalStyles";
import Hero from "./Components/HeroSection";
import Navbar from "./Components/Navbar/navbar";
import InfoSection from "./Components/InfoSection";
import NotFound from "./Components/inexistentPage";
import BrandSection from "./Components/BrandSection";
import Dashboard from "./Components/Dashboard/Pages/dashboard";

/**Usuario de prueba :
 * ttt@ttt.com
 * password */
function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                <PrivateRoute path="/app/dashboard" component={Dashboard} >

                </PrivateRoute>

                    <Route exact path="/">

                        <GlobalStyle />
                        <Navbar />
                        <Hero />
                        <section id="servicios">
                            <InfoSection />
                        </section>
                        <BrandSection />
                        <section id="nosotros"></section>
                        <section id="contacto"></section>
                    </Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
