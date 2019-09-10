import axios from "axios";

export default {
  // Gets books from the Google API
  getArticles: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedArticles: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveArticles: function(articleData) {
    return axios.post("/api/savearticle/" + articleData._id, articleData);
  }
};
