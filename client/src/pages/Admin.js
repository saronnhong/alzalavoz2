import React, { Component } from "react";
import "./Admin.css";
import API from "./../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";


class Admin extends Component {
  state = {
    titleEn: "",
    titleEsp: "",
    author: "",
    date: new Date().toLocaleDateString(),
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
    template: "1",
    showUpdateBtn: false,
    showTable: true,
    showForm: false
  };

  componentDidMount() {
    if (!localStorage.getItem('id_token')) {
      window.location = '/';
    } else {
      this.loadArticles();
    }
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        // console.log(res.data);
        this.setState({ articles: res.data });
        window.scrollTo(0, 0);
      })

      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };
  submitForm = () => {
    API.saveArticles({
      titleEn: this.state.titleEn,
      titleEsp: this.state.titleEsp,
      author: this.state.author,
      date: this.state.date,
      imageUrl1: this.state.imageUrl1,
      imageUrl2: this.state.imageUrl2,
      imageUrl3: this.state.imageUrl3,
      imageUrl4: this.state.imageUrl4,
      imageUrl5: this.state.imageUrl5,
      videoUrl: this.state.videoUrl,
      contentEn1: this.state.contentEn1,
      contentEsp1: this.state.contentEsp1,
      contentEn2: this.state.contentEn2,
      contentEsp2: this.state.contentEsp2,
      contentEn3: this.state.contentEn3,
      contentEsp3: this.state.contentEsp3,
      contentEn4: this.state.contentEn4,
      contentEsp4: this.state.contentEsp4,
      contentEn5: this.state.contentEn5,
      contentEsp5: this.state.contentEsp4,
      template: this.state.template

    })
      .then(this.setState({
        titleEn: "",
        titleEsp: "",
        author: "",
        date: new Date().toLocaleDateString(),
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
        showTable: true,
        showForm: false
      }),
        this.loadArticles());
  }

  updateForm = () => {

    API.updateArticles({
      _id: this.state.id,
      titleEn: this.state.titleEn,
      titleEsp: this.state.titleEsp,
      author: this.state.author,
      date: this.state.date,
      imageUrl1: this.state.imageUrl1,
      imageUrl2: this.state.imageUrl2,
      imageUrl3: this.state.imageUrl3,
      imageUrl4: this.state.imageUrl4,
      imageUrl5: this.state.imageUrl5,
      videoUrl: this.state.videoUrl,
      contentEn1: this.state.contentEn1,
      contentEsp1: this.state.contentEsp1,
      contentEn2: this.state.contentEn2,
      contentEsp2: this.state.contentEsp2,
      contentEn3: this.state.contentEn3,
      contentEsp3: this.state.contentEsp3,
      contentEn4: this.state.contentEn4,
      contentEsp4: this.state.contentEsp4,
      contentEn5: this.state.contentEn5,
      contentEsp5: this.state.contentEsp4,
      template: this.state.template

    })
      .then(this.setState({
        titleEn: "",
        titleEsp: "",
        author: "",
        date: new Date().toLocaleDateString(),
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
        showUpdateBtn: false,
        showTable: true,
        showForm: false
      }))
      .then(this.loadArticles());
  }

  deleteButton = function (id) {
    API.deleteArticles(id)
      .then(this.loadArticles());
  }
  editButton = function (id) {
    API.getArticlesById(id)
      .then((res) => this.setState({
        titleEn: res.data.titleEn,
        titleEsp: res.data.titleEsp,
        author: res.data.author,
        date: res.data.date,
        imageUrl1: res.data.imageUrl1,
        imageUrl2: res.data.imageUrl2,
        imageUrl3: res.data.imageUrl3,
        imageUrl4: res.data.imageUrl4,
        imageUrl5: res.data.imageUrl5,
        videoUrl: res.data.videoUrl,
        contentEn1: res.data.contentEn1,
        contentEsp1: res.data.contentEsp1,
        contentEn2: res.data.contentEn2,
        contentEsp2: res.data.contentEsp2,
        contentEn3: res.data.contentEn3,
        contentEsp3: res.data.contentEsp3,
        contentEn4: res.data.contentEn4,
        contentEsp4: res.data.contentEsp4,
        contentEn5: res.data.contentEn5,
        contentEsp5: res.data.contentEsp4,
        id: res.data._id,
        template: res.data.template,
        showUpdateBtn: true,
        showTable: false,
        showForm: true
      }))
      .then(this.loadArticles());
  }

  logOut = () => {
    localStorage.removeItem('id_token');
    window.location.reload('/');
  }

  newArticle = () => {
    this.setState({ showForm: true, showTable: false });
  }

  render() {
    return (
      <div className="container mainPage">
        {this.state.showTable ?
          <div className="row">
            <table className="table table-striped table-bordered" >
              <thead className="thead-dark">
                <tr >
                  <th scope="col" className="templateCol" width="5%">Template</th>
                  <th scope="col" className="titleCol" width="40%">Title</th>
                  <th scope="col" className="authorCol">Author</th>
                  <th scope="col" className="dateCol">Date</th>
                  <th scope="col" ></th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map(art => (
                  <tr>
                    <td className="templateCol">{art.template}</td>
                    <td>{art.titleEn}</td>
                    <td>{art.author}</td>
                    <td className="dateCol">{art.date}</td>
                    <td className="editCol"><EditBtn data-id={art._id} onClick={() => this.editButton(art._id)} /> <DeleteBtn data-id={art._id} onClick={() => this.deleteButton(art._id)} /></td>

                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" class="btn btn-success" onClick={() => this.newArticle()}>New Article</button>
          </div> : null}
        {this.state.showForm ?
          <div className="row">
            <div className="col-md-6">
              <form>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Template</label>
                  </div>
                  <select class="custom-select" id="inputGroupSelect01" name="template" value={this.state.template} onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Title*" name="titleEn" value={this.state.titleEn} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Title* [esp]" name="titleEsp" value={this.state.titleEsp} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Author*" name="author" value={this.state.author} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Date*" name="date" value={this.state.date} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="url" className="form-control" placeholder="Image URL*" name="imageUrl1" value={this.state.imageUrl1} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <input type="url" className="form-control" placeholder="Image URL 2" name="imageUrl2" value={this.state.imageUrl2} onChange={this.handleInputChange} /> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <input type="url" className="form-control" placeholder="Image URL 3" name="imageUrl3" value={this.state.imageUrl3} onChange={this.handleInputChange} /> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <input type="url" className="form-control" placeholder="Image URL 4" name="imageUrl4" value={this.state.imageUrl4} onChange={this.handleInputChange} /> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <input type="url" className="form-control" placeholder="Image URL 5" name="imageUrl5" value={this.state.imageUrl5} onChange={this.handleInputChange} /> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <input type="url" className="form-control" placeholder="Video Url" name="videoUrl" value={this.state.videoUrl} onChange={this.handleInputChange} /> : null}
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Content [en]*" rows="8" name="contentEn1" value={this.state.contentEn1} onChange={this.handleInputChange}></textarea>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Content [esp]*" rows="8" name="contentEsp1" value={this.state.contentEsp1} onChange={this.handleInputChange}></textarea>
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 2 [en]" rows="8" name="contentEn2" value={this.state.contentEn2} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 2 [esp]" rows="8" name="contentEsp2" value={this.state.contentEsp2} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 3 [en]" rows="8" name="contentEn3" value={this.state.contentEn3} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 3 [esp]" rows="8" name="contentEsp3" value={this.state.contentEsp3} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 4 [en]" rows="8" name="contentEn4" value={this.state.contentEn4} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 4 [esp]" rows="8" name="contentEsp4" value={this.state.contentEsp4} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 5 [en]" rows="8" name="contentEn5" value={this.state.contentEn5} onChange={this.handleInputChange}></textarea> : null}
                </div>
                <div className="form-group">
                  {this.state.template === "2" ? <textarea className="form-control" placeholder="Content 5 [esp]" rows="8" name="contentEsp5" value={this.state.contentEsp5} onChange={this.handleInputChange}></textarea> : null}
                </div>
              </form>
              <button type="button" id="submitBtn" className="btn btn-warning" onClick={() => { this.submitForm() }}>Submit</button>
              {this.state.showUpdateBtn ? <button type="button" id="updateBtn" className="btn btn-success" onClick={() => { this.updateForm() }}>Update</button> : null}
              <button type="button" id="submitBtn" className="btn btn-danger" onClick={() => { this.logOut() }}>Log Out</button>
            </div>
          </div>
          : null}
      </div>
    );
  }
}

export default Admin;
