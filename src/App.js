import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./app/auth/AuthContext";
import Dashboard from "./Components/Dashboard/dashboard";
import ForgotPassword from "./Components/Auth/restorePass";
import PrivateRoute from "./app/auth/PrivateRoute";
import { GlobalStyle } from "./Components/GlobalStyles";
import Hero from "./Components/HeroSection";
import InfoSection from "./Components/InfoSection";

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
                <InfoSection id="info" />
            </AuthProvider>
        </Router>
    );
}

export default App;
