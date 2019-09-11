import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import axios from 'axios';
import API from "./utils/API";
import DeleteBtn from "./components/DeleteBtn";

class App extends Component {
  state = {
    title: "",
    author: "",
    date: "",
    imageUrl: "",
    content: "",
    articles: [],
    delete: ""
  };

  componentDidMount() {
    this.loadArticles();
    
  }
  componentDidUpdate(){
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        console.log(res.data);
        this.setState({ articles: res.data })
      })

      .catch(err => console.log(err));
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
      .then(this.setState({
        title: "",
        author: "",
        date: "",
        imageUrl: "",
        content: ""
      }));
  }
  deleteButton = function(id) {
    API.deleteArticles(id);
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
                <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="url" className="form-control" placeholder="Image URL" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Article Content" rows="8" name="content" value={this.state.content} onChange={this.handleInputChange}></textarea>
              </div>
            </form>
            <button type="button" className="btn btn-warning" onClick={() => { this.submitForm() }}>Submit</button>
            
          </div>
          <div className="col-md-6">
            {this.state.articles.map(art => (
              <div data-block={this.state.author} >
                {art.title} by: {art.author} 
                <DeleteBtn data-id={art._id} onClick={()=>this.deleteButton(art._id)}/>
              </div>
              
            ))}

          </div>
        </div>

      </div>
    );
  }
}

export default App;
