
import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Stories extends Component {
  state = {
    titleEn: "",
    titleEsp: "",
    author: "",
    date: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    contentEn1: "",
    contentEsp1: "",
    contentEn2: "",
    contentEsp2: "",
    contentEn3: "",
    contentEsp3: "",
    contentEn4: "",
    contentEsp4: "",
    contentEn5: "",
    contentEsp5: "",
    articles: [],
    delete: "",
    id: "",
    template: "1"
    // showUpdateBtn: false
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id }, () => this.loadArticles());

  }

  loadArticles = () => {
    API.getArticlesById(this.state.id)
      .then(res => {
        console.log(res);
        this.setState({ articles: res.data });
        // console.log(this.props.match.params.id);
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };
  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.state.articles.imageUrl1 + ')'
    }

    return (
      <div className="storiesPage" style={divStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6 articleSection">
              <h1 className="artTitle">{this.state.articles.titleEn} </h1>
              <h6>by {this.state.articles.author} </h6>
              <div className="artBody">{this.state.articles.contentEn1}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stories;
