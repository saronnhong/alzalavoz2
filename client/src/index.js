import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Stories from "./components/Stories";
import Articles from "./components/Articles";
import registerServiceWorker from "./registerServiceWorker";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Articles} />
                <Route path="/stories/:id" component={Stories} />
                <Route exact path="/admin" component={App} />
                <Route component={Articles} />
            </Switch>


        </div>
    </Router>
    , document.getElementById('root'));

// registerServiceWorker();
