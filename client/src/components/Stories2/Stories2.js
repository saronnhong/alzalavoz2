
import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Stories2 extends Component {
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

  // componentDidMount() {
  //   this.setState({ id: this.props.match.params.id }, () => this.loadArticles());

  // }

  // loadArticles = () => {
  //   API.getArticlesById(this.state.id)
  //     .then(res => {
  //       // console.log(res.data);
  //       this.setState({ articles: res.data });
  //       // console.log(this.props.match.params.id);
  //     })
  //     .catch(err => console.log(err));
  // };
  render() {
    // var divStyle = {
    //   backgroundImage: 'url(' + this.state.articles.imageUrl + ')'
    // }

    return (
      <div  >
        <section className="cd-section cd-section--bg-fixed">
          {/* <!-- section content here --> */}
        </section>

        <section className="cd-section">
          {/* <!-- section content here --> */}
          <div className="container">
            <h1>You know nothing, Jon Snow. House Tarly of Horn Hill</h1>
            <h10>The Knight of Lemonwood. More pigeon pie, please. Unbowed, Unbent, Unbroken. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. The battle of the redgrass field. Never Resting. Dunc the Lunk, thick as a castle wall. A Lannister always pays his debts. A Lannister always pays his debts. The battle of the redgrass field.</h10>
          </div>

        </section>
        <section className="cd-section cd-section--bg-fixed">
          {/* <!-- section content here --> */}
        </section>

        <section className="cd-section">
          {/* <!-- section content here --> */}
          The Knight of Lemonwood. More pigeon pie, please. Unbowed, Unbent, Unbroken. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. The battle of the redgrass field. Never Resting. Dunc the Lunk, thick as a castle wall. A Lannister always pays his debts. A Lannister always pays his debts. The battle of the redgrass field.
        </section>
        <section className="cd-section cd-section--bg-fixed">
          {/* <!-- section content here --> */}
        </section>

        <section className="cd-section">
          {/* <!-- section content here --> */}
          The Knight of Lemonwood. More pigeon pie, please. Unbowed, Unbent, Unbroken. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. The battle of the redgrass field. Never Resting. Dunc the Lunk, thick as a castle wall. A Lannister always pays his debts. A Lannister always pays his debts. The battle of the redgrass field.
        </section>
        <section className="cd-section cd-section--bg-fixed">
          {/* <!-- section content here --> */}
        </section>

        <section className="cd-section">
          {/* <!-- section content here --> */}
          The Knight of Lemonwood. More pigeon pie, please. Unbowed, Unbent, Unbroken. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. The battle of the redgrass field. Never Resting. Dunc the Lunk, thick as a castle wall. A Lannister always pays his debts. A Lannister always pays his debts. The battle of the redgrass field.
        </section>
        <section className="cd-section cd-section--bg-fixed">
          {/* <!-- section content here --> */}
        </section>

        <section className="cd-section">

          The Knight of Lemonwood. More pigeon pie, please. Unbowed, Unbent, Unbroken. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. The battle of the redgrass field. Never Resting. Dunc the Lunk, thick as a castle wall. A Lannister always pays his debts. A Lannister always pays his debts. The battle of the redgrass field.
        </section>
      </div>
    );
  }
}

export default Stories2;
