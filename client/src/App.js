import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import axios from 'axios';
import API from "./utils/API";
import DeleteBtn from "./components/DeleteBtn";
import EditBtn from "./components/EditBtn";

class App extends Component {
  state = {
    title: "",
    author: "",
    date: "",
    imageUrl: "",
    content: "",
    articles: [],
    delete: "",
    id: "",
    showUpdateBtn: false
  };

  componentDidMount() {
    this.loadArticles();
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({date: month + '/' + date + '/' + year})
    console.log(date);

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
      }))
      .then(this.loadArticles());
  }

  updateForm = () => {

    API.updateArticles({
      _id: this.state.id,
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
        content: "",
        showUpdateBtn: false
      }))
      .then(this.loadArticles());
  }

  deleteButton = function (id) {
    API.deleteArticles(id)
      .then(this.loadArticles());
  }
  editButton = function (id) {
    API.getArticlesById(id)
      .then((res)=>this.setState({title: res.data.title, author: res.data.author, date: res.data.date, imageUrl: res.data.imageUrl, content: res.data.content, id: res.data._id, showUpdateBtn: true}))
      .then(this.loadArticles());
  }

  render() {
    return (
      <div className="container mainPage">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Title (required)" name="title" value={this.state.title} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Author (required)" name="author" value={this.state.author} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Date (required)" name="date" value={this.state.date} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="url" className="form-control" placeholder="Image URL (required)" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Article Content (required)" rows="8" name="content" value={this.state.content} onChange={this.handleInputChange}></textarea>
              </div>
            </form>
            <button type="button" id="submitBtn" className="btn btn-warning" onClick={() => { this.submitForm() }}>Submit</button>
            {this.state.showUpdateBtn ? <button type="button" id="updateBtn" className="btn btn-success" onClick={() => { this.updateForm() }}>Update</button>: null}
          </div>
          <div className="col-md-6">
            {this.state.articles.map(art => (
              <div className="articleBlock" data-block={this.state.author} >
                {art.title} by: {art.author}
                
                <DeleteBtn data-id={art._id} onClick={() => this.deleteButton(art._id)} />
                <EditBtn data-id={art._id} onClick={() => this.editButton(art._id)} />
              </div>

            ))}

          </div>
        </div>

      </div>
    );
  }
}

export default App;
