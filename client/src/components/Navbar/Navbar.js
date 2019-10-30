import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop d-flex flex-column">
            <nav className="p-2 navbar navbar-dark bg-dark fixed-top navbar-expand-sm container-fluid" id="nav1">
                <div className="row rowNav dflex">
                    <Link smooth to="/login">
                        <div className="navbar-brand" >
                            ALZA<br />LA<br />VOZ
                            </div>
                    </Link>
                    <div className="my-auto mr-auto ">
                        <div className="quote ">"Raise Your Voice"</div>
                    </div>
                    <form class="form-inline searchBox">
                        <input class="form-control mr-sm-2 searchInput" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-sm container-fluid secondRow" id="nav1">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav btn-group">
                       
                            <li class="nav-item secondRowBox btn btn-dark">
                                <Link smooth to="/">
                                    <div className="navMenu" id="stories" data-toggle="collapse" data-target=".navbar-collapse.show">Stories</div>
                                </Link>
                            </li>
                       
                            <li class="nav-item secondRowBox btn btn-dark">
                                <Link smooth to="/about">
                                    <div className="navMenu" id="navPort" data-toggle="collapse" data-target=".navbar-collapse.show">Who We Are</div>
                                </Link>
                            </li>
                        
                            <li class="nav-item secondRowBox btn btn-dark">
                                <Link smooth to="/contact">
                                    <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Share Your Story</div>
                                </Link>
                            </li>
                        
                            <li class="nav-item secondRowBox btn btn-dark">
                                <Link smooth to="/contact">
                                    <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact Us</div>
                                </Link>
                            </li>
                    </ul>
                </div>
            </nav>


            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link smooth to="/">
                                    <div className="navMenu" id="stories" data-toggle="collapse" data-target=".navbar-collapse.show">Stories</div>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="/about">
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
                    </div> */}




        </div>



    );
}

export default Navbar;
