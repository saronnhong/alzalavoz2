import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Stories from "./components/Stories";
import Homepage from "./components/Homepage";
import registerServiceWorker from "./registerServiceWorker";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/stories/:id" component={Stories} />
                <Route exact path="/admin" component={App} />
                <Route component={Homepage} />
            </Switch>


        </div>
    </Router>
    , document.getElementById('root'));

// registerServiceWorker();
