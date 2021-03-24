import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Components/pages/Service";
import Products from "./Components/pages/Products";
import ContactUs from "./Components/pages/ContactUs";
import SignUp from "./Components/pages/SignUp";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services" exact component={Service} />
                <Route path="/products" exact component={Products} />
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/log-in" exact component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
