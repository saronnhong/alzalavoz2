import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

class Navbar extends React.Component {
    state = {
        isMobile: false,
        quote: "Raise Your Voice",
        hideSearchBtn: false
    }

    handleWindowResize = () => {
        this.setState({ isMobile: true, quote: " ", hideSearchBtn: true });
    }

    componentDidMount() {
        if (window.innerWidth < 600) {
            this.handleWindowResize();
        }
    }

    render() {
        return (
            <div className="navTop d-flex flex-column">
                {this.state.isMobile ? null : <nav className="p-2 navbar navbar-dark bg-dark fixed-top navbar-expand-sm container-fluid" id="nav1">
                    <div className="row rowNav dflex">
                        <Link smooth to="/login">
                            <div className="navbar-brand alzaLogo" >
                                ALZA<br />LA<br />VOZ
                            </div>
                        </Link>
                        <div className="my-auto mr-auto ">
                            <div className="quote ">{this.state.quote}</div>
                        </div>
                        <form class="form-inline searchBox">
                            <input class="form-control mr-sm-2 searchInput my-auto" type="search" placeholder="Search" aria-label="Search" />
                            {this.state.hideSearchBtn ? null : <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>};
                        </form>
                    </div>
                </nav>}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark secondRow fixed-top container-fluid">
                    {this.state.isMobile ? <Link smooth to="/login">
                        <div className="navbar-brand alzaLogo" >
                            ALZA<br />LA<br />VOZ
                            </div>
                    </Link>: null}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item secondRowBox">
                                <Link smooth to="/">
                                    <div className="navMenu" id="stories" data-toggle="collapse" data-target=".navbar-collapse.show">Stories</div>
                                </Link>
                            </li>
                            <li class="nav-item secondRowBox">
                                <Link smooth to="/about">
                                    <div className="navMenu" id="navPort" data-toggle="collapse" data-target=".navbar-collapse.show">Who We Are</div>
                                </Link>
                            </li>
                            <li class="nav-item secondRowBox">
                                <Link smooth to="/contact">
                                    <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Share Your Story</div>
                                </Link>
                            </li>
                            <li class="nav-item secondRowBox">
                                <Link smooth to="/contact">
                                    <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact Us</div>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                {/* <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-sm container-fluid secondRow" id="nav1">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav">
                        <ul class="navMenuItems">

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
                </nav> */}
            </div>
        );
    }
}
export default Navbar;
