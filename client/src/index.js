import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Stories from "./components/Stories";
import registerServiceWorker from "./registerServiceWorker";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/stories" component={Stories} />
                <Route component={App} />
            </Switch>


        </div>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
