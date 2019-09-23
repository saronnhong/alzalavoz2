
import React, { Component } from "react";
import API from "../../utils/API";
import ReactPlayer from 'react-player'
import "./style.css";

class Stories2 extends Component {
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
    videoUrl: "",
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
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id }, () => this.loadArticles());

  }

  loadArticles = () => {
    API.getArticlesById(this.state.id)
      .then(res => {
        console.log(res.data);

        this.setState({
          articles: res.data,
          contentEn1: res.data.contentEn1,
          contentEsp1: res.data.contentEsp1,
          contentEn2: res.data.contentEn2,
          contentEsp2: res.data.contentEsp2,
          contentEn3: res.data.contentEn3,
          contentEsp3: res.data.contentEsp3,
          contentEn4: res.data.contentEn4,
          contentEsp4: res.data.contentEsp4,
          contentEn5: res.data.contentEn5,
          contentEsp5: res.data.contentEsp5,
          videoUrl: res.data.videoUrl
        });
        // console.log(this.props.match.params.id);
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };
  render() {
    var divStyle1 = {
      backgroundImage: 'url(' + this.state.articles.imageUrl1 + ')'
    }
    var divStyle2 = {
      backgroundImage: 'url(' + this.state.articles.imageUrl2 + ')'
    }
    var divStyle3 = {
      backgroundImage: 'url(' + this.state.articles.imageUrl3 + ')'
    }
    var divStyle4 = {
      backgroundImage: 'url(' + this.state.articles.imageUrl4 + ')'
    }
    var divStyle5 = {
      backgroundImage: 'url(' + this.state.articles.imageUrl5 + ')'
    }

    return (
      <div className="stories2Page">
        <section className="cd-section cd-section--bg-fixed" style={divStyle1}>

        </section>

        <section className="cd-section">

          <div className="container">
            <h1>{this.state.articles.titleEn}</h1>
            <h7>by {this.state.articles.author}</h7>

            <h5>{this.state.articles.contentEn1}</h5>
          </div>

        </section>

        {this.state.contentEn2.length && this.state.contentEsp2.length !== 0 ?
          <div>
            <section className="cd-section cd-section--bg-fixed" style={divStyle2}>

            </section>

            <section className="cd-section">

              <div className="container">
                <ReactPlayer url={this.state.videoUrl} />
                <h5>{this.state.articles.contentEn2}</h5>
              </div>
            </section>
          </div>
          : null}

        {this.state.contentEn3.length && this.state.contentEsp3.length !== 0 ?
          <div>
            <section className="cd-section cd-section--bg-fixed" style={divStyle3}>

            </section>

            <section className="cd-section" >

              <div className="container">
                <h5>{this.state.articles.contentEn3}</h5>
              </div>
            </section>
          </div>
          : null}

        {this.state.contentEn4.length && this.state.contentEsp4.length !== 0 ?
          <div>
            <section className="cd-section cd-section--bg-fixed" style={divStyle4}>

            </section>

            <section className="cd-section">
              <div className="container" >
                <h5>{this.state.articles.contentEn4}</h5>
              </div>
            </section>
          </div>
          : null}



        {this.state.contentEn5.length && this.state.contentEsp5.length !== 0 ?
          <div>
            <section className="cd-section cd-section--bg-fixed" style={divStyle5}>

            </section>

            <section className="cd-section">
              <div className="container" >
                <h5>{this.state.articles.contentEn5}</h5>

              </div>
            </section>
          </div>
          : null}
      </div>
    );
  }
}

export default Stories2;
