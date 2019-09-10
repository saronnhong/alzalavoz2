import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import axios from 'axios';
import API from "./utils/API";

class App extends Component {
  state = {
    title: "winds of winter",
    author: "george RR martin",
    date: "11",
    imageUrl: "sansa",
    content: "arya kills the nights king"
  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submitForm = () => {
    API.saveArticles({
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      imageUrl: this.state.imageUrl,
      content: this.state.content
    })
      .then(console.log("article has been saved!!"));
  }

  render() {
    return (
      <div className="container mainPage">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Author" name="author" value={this.state.author} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleInputChange}/>
              </div>
              <div className="form-group">
                <input type="url" className="form-control" placeholder="Image URL" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Article Content" rows="8" name="content" value={this.state.content} onChange={this.handleInputChange}></textarea>
              </div>
            </form>
            <button type="button" className="btn btn-warning" onClick={() => {this.submitForm()}}>Submit</button>
          </div>
          <div className="col-md-6">

          </div>
        </div>

      </div>
    );
  }
}

export default App;
