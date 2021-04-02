import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from './app/auth/AuthContext';

function App() {
    return (
        <Router>
            <AuthProvider>
            <Navbar/>
            <section id='s0'></section>
            <section id='s1'></section>
            <section id='s2'></section>
            <section id='s3'></section>
            </AuthProvider>
        </Router>
    );
}

export default App;
