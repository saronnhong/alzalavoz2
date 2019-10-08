
import React, { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import API from "./utils/API";
import DeleteBtn from "./components/DeleteBtn";
import EditBtn from "./components/EditBtn";
import Admin from "./pages/Admin";

class App extends Component {
  

  render() {
    return (
      <div>
        <Admin />
      </div>

     
    );
  }
}

export default App;
