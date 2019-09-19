import axios from "axios";

export default {
  // Gets books from the Google API
  getArticles: function() {
    return axios.get("/api/savedarticles");
  },
  getArticlesById: function(id){
    return axios.get("api/savedarticles/" + id);
  },
  // Gets all saved books
  // getSavedArticles: function() {
  //   return axios.get("/api/books");
  // },
  // Deletes the saved book with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/deletearticles/" + id);
  },
  // Saves an book to the database
  saveArticles: function(articleData) {
    return axios.post("/api/savearticle/" + articleData._id, articleData);
  }
};
