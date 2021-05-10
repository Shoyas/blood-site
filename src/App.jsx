import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import DonateBlood from './Components/DonateBlood/DonateBlood';
import DonarCenter from './Components/DonarCenter/DonarCenter';
import Service from './Components/Service/Service';
import SupportUs from './Components/SupportUs/SupportUs';
import Contact from './Components/Contact/Contact';
import Appointment from './Components/Appointment/Appointment';
import Login from './Components/Login/Login';
import Donate from './Components/Donate/Donate';
import Profile from './Components/Profile/Profile';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
    });
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/donateBlood">
                        <DonateBlood />
                    </Route>
                    <Route path="/donarLocation">
                        <DonarCenter />
                    </Route>
                    <ProtectedRoute path="/appointment">
                        <Appointment />
                    </ProtectedRoute>
                    <Route path="/services">
                        <Service />
                    </Route>
                    <Route path="/support">
                        <SupportUs />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <ProtectedRoute path="/donate">
                        <Donate />
                    </ProtectedRoute>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;