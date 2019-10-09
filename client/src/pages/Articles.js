import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import API from "../utils/API";
import "./Articles.css";

class Articles extends Component {
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
                <Link to={"/stories" + art.template + "/" + art._id} >
                  <div className="imageContainer">
                    <img data-template={art.template} className="image1" width ="450px" height="300px" src={art.imageUrl1} />
                    <div className="postTitle hvr-float">{art.titleEn}</div>
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
