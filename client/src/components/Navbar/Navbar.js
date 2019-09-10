import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-sm" id="nav1">
                <Link smooth to="/">
                    <div className="navbar-brand" > Alza La Voz</div>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link smooth to="/about">
                                <div className="navMenu" id="navAbout" data-toggle="collapse" data-target=".navbar-collapse.show">Stories</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="/portfolio">
                                <div className="navMenu" id="navPort" data-toggle="collapse" data-target=".navbar-collapse.show">Who We Are</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="/contact">
                                <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Share Your Story</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="/contact">
                                <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact Us</div>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>



    );
}

export default Navbar;
