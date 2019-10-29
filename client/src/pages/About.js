import React, { Component } from "react";
import "./About.css";

class About extends Component {


  render() {
    return (
      <div className="container aboutPage">
        
        <h1 className="aboutTitle">About Us</h1>
        <h4 className="theProject">The Project</h4>
        <div className="paragraphText">
          <p>Alza la Voz is a non-profit project founded as a human rights network in 2014. We are a network of human rights defenders and civil society whose mission is to facilitate a space where voices that are otherwise silenced have a medium to talk and be heard. </p>
          <p>As a community-founded project, Alza la Voz tries to document stories of human rights abuses and of vulnerable situations. The stories are documented in a collective process that invites the storyteller to participate in the creation process.</p>
          <p>We believe in the importance of adding faces and concrete human impacts to controversial policies and acts of violence. We also believe in the importance of redefining journalism as a community-based tool. </p>
          <p>By creating a space where excluded voices are given a pen and a microphone, we can send a powerful signal to the people and institutions committing human rights abuses: we are strongest when our voices are joined, and our voices will bring light to the injustices that are being committed. We are not alone. </p>
        </div>

      </div>
    );
  }
}

export default About;
