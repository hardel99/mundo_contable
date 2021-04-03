import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "./app/auth/AuthContext";
import Dashboard from "./Components/Dashboard/dashboard";
import ForgotPassword from "./Components/Auth/restorePass";
import PrivateRoute from "./app/auth/PrivateRoute";
import { GlobalStyle } from "./Components/GlobalStyles";
import Hero from "./Components/HeroSection";
import InfoSection from "./Components/InfoSection";
=======
import {AuthProvider} from './app/auth/AuthContext';
>>>>>>> origin/authentication

function App() {
    return (
        <Router>
            <AuthProvider>
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route
                        path="/forgotPassword"
                        exact
                        component={ForgotPassword}
                    />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
                <Hero id="main" />
                <section id='servicio'>
                    <InfoSection id="info" />
                </section>
                <section id='nosotros'>
                    <InfoSection id="info" />
                </section>
                <section id='contacto'>
                    <InfoSection id="info" />
                </section>
            </AuthProvider>
        </Router>
    );
}

export default App;
