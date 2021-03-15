import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Components/Auth/signup";
import { AuthProvider } from "./app/auth/AuthContext";
import Dashboard from "./Components/Dashboard/dashboard";
import Login from "./Components/Auth/login";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
