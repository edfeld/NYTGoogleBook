import axios from "axios";

export default {
  // Gets books from the Google API
  // PostMan test: http://localhost:3000//api/google?q=quilting
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  // This PostMan test worked: http://localhost:3000//api/books with no body variables
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
