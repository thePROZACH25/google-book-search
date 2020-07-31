import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Deletes book using given id
  deleteBook: function (id) {
    return axios.delete("/api/books" + id).then((result) => result.data);
  },
  // Saves book to db
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then((result) => result.data);
  },
  // Retrieve saved books from db
  savedBooks: function () {
    return axios.get("/api/books").then((result) => result.data);
  },
};
