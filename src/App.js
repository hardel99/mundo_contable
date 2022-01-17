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
import AppsSection from "./Components/AppsSection";
import LearningSection from "./Components/LearningSection";
import NotFound from "./Components/inexistentPage";
import BrandSection from "./Components/BrandSection";
import AboutSection from "./Components/AboutUs/AboutSection";
import Drawer from "./Components/DashboardTest/Drawer";
import Mensajes from "./Components/DashboardTest/Mensajes";
import Informacion from "./Components/DashboardTest/Informacion";
import Plans from "./Components/DashboardTest/Plans";
import { makeStyles } from "@material-ui/core/styles";
import PlanSection from "./Components/Plans";
import ChatSupport from "./Components/ChatSupport";
import {FooterContainer} from "./Components/Footer/footer"
import FormButton from "./Components/ContactForm/FormButton";

const useStyles = makeStyles( theme =>({
    container: {
        display: "flex",
        background: '#fff',
        //border: "solid #20f32b 3px",
    },
}));

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
                            <PrivateRoute component={Drawer} />
                            <Switch>
                                <Route exact path="/app/mensajes" render={(props) => <Mensajes {...props} />} />
                                <Route exact path="/app/informacion" render={(props) => <Informacion {...props} />} />
                                <Route exact path="/app/plans" render={(props) => <Plans {...props} />} />

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
                            <AppsSection/>
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
