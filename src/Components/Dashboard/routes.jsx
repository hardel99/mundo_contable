import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Plans from "./Pages/Plans"
import Settings from "./Pages/Settings"
import Dashboard from "./Pages/dashboard";
import Layout from "./components/Layout"

function Routes() {
    return (
        <BrowserRouter>
        <Route render= {(props)=>(
            <Layout {...props}>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/plans" component={Plans}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>
            </Layout>  
        )} />
        </BrowserRouter>
    )
}

export default Routes;