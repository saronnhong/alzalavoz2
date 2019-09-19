
import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class Stories extends Component {

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
    this.setState({ id: this.props.match.params.id }, () => this.loadArticles());


  }

  loadArticles = () => {
    API.getArticlesById(this.state.id)
      .then(res => {
        console.log(res.data);

        this.setState({ articles: res.data });

        console.log(this.props.match.params.id);
      })

      .catch(err => console.log(err));
  };
  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.state.articles.imageUrl + ')'
    }

    return (
      <div className="storiesPage" style={divStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6 articleSection">
              <h1 className="artTitle">{this.state.articles.title} </h1>
              <h6>by {this.state.articles.author} </h6>
              <h10 className="artBody">{this.state.articles.content}</h10>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Stories;
