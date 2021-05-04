import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './Components/Home/Home';
import DonateBlood from './Components/DonateBlood/DonateBlood';

const App = () => {
    return (
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
                {/* <Route path="/home">
                    <Home />
                </Route> */}
                {/* <Route path="/home">
                    <Home />
                </Route> */}
                {/* <Route path="/home">
                    <Home />
                </Route> */}
            </Switch>
        </Router>
    );
};

export default App;