import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./app/auth/AuthContext";
import ForgotPassword from "./Components/Auth/restorePass";
import PrivateRoute from "./app/auth/PrivateRoute";
import { GlobalStyle } from "./Components/GlobalStyles";
import Hero from "./Components/HeroSection";
import {SliderData} from "./Components/HeroSection/SliderData"
import Navbar from "./Components/Navbar/navbar";
import InfoSection from "./Components/InfoSection";
import LearningSection from "./Components/LearningSection";
import NotFound from "./Components/inexistentPage";
import BrandSection from "./Components/BrandSection";
import AboutSection from "./Components/AboutUs/AboutSection";
import Drawer from "./Components/DashboardTest/Drawer";
import Home from "./Components/DashboardTest/Home";
import Contact from "./Components/DashboardTest/Contact";
import About from "./Components/DashboardTest/About";
import { makeStyles } from "@material-ui/core/styles";
import PlanSection from "./Components/Plans";
import ChatSupport from "./Components/ChatSupport";
import {FooterContainer} from "./Components/Footer/footer"
import FormButton from "./Components/ContactForm/FormButton";


const useStyles = makeStyles({
    container: {
        display: "flex",
    },
});

/**Usuario de prueba :
 * ttt@ttt.com
 * password */
function App() {
    const classes = useStyles();
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute path="/app">
                        <div className={classes.container}>
                            <Drawer />
                            <PrivateRoute component={Drawer} />
                            <Switch>
                                <Route exact path="/app/home" render={(props) => <Home {...props} />} />
                                <Route exact path="/app/contact" render={(props) => <Contact {...props} />} />
                                <Route exact path="/app/about" render={(props) => <About {...props} />} />

                                <Route path="/app/" component={NotFound} />
                            </Switch>
                        </div>
                    </PrivateRoute>
                    <Route exact path="/">
                        <GlobalStyle />
                        <Navbar />
                        <Hero slides={SliderData} />
                        <FormButton/>
                        <section id="servicios">
                            <InfoSection />
                        </section>
                        <BrandSection />
                        <section id="nosotros">
                            <AboutSection />
                        </section>
                        <section id="learning">
                            <LearningSection />
                        </section>
                        <PlanSection />
                        <ChatSupport />
                        <FooterContainer/>
                    </Route>
                    <Route exact path="/forgotPassword" component={ForgotPassword} />

                    <Route path="/" component={NotFound} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
