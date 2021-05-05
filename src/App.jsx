import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './Components/Home/Home';
import DonateBlood from './Components/DonateBlood/DonateBlood';
import DonarCenter from './Components/DonarCenter/DonarCenter';
import Service from './Components/Service/Service';

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
                <Route path="/donarLocation">
                    <DonarCenter />
                </Route>
                <Route path="/services">
                    <Service />
                </Route>
                {/* <Route path="/home">
                    <Home />
                </Route> */}
            </Switch>
        </Router>
    );
};

export default App;