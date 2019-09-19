import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Stories from "../Stories";
import API from "../../utils/API";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Articles extends Component {
  state = {
    title: "",
    author: "",
    date: "",
    imageUrl: "",
    content: "",
    articles: [],
    delete: "",
    id: ""
  };

  componentDidMount() {
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

  render() {
    return (
      <div className="homePage">
        <div className="container">
          <div className="row firstRow">
          {this.state.articles.map(art => 
            <div className="col-md-6">
              <Link to={"/stories/" + art._id} >
              <div className="imageContainer">
                <img className="image1" height="300px" src={art.imageUrl} />
                <div className="postTitle">{art.author}</div>
              </div>
              </Link>
            </div>
          )}
           
            
          </div>
          
        </div>

      </div>
    );
  }
}

export default Articles;