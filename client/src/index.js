
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Stories from "./components/Stories";
import Stories2 from "./components/Stories2";
import Articles from "./components/Articles";
import About from "./components/About";
import Login from "./pages/Login";
// import registerServiceWorker from "./registerServiceWorker";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Articles} />
                <Route path="/stories1/:id" component={Stories} />
                <Route path="/stories2/:id" component={Stories2} />
                <Route exact path="/about" component={About} />
                <Route exact path="/admin" component={App} />
                <Route exact path="/login" component={Login} />
                <Route component={Articles} />
            </Switch>


        </div>
    </Router>
    , document.getElementById('root'));

// registerServiceWorker();
