import React, { Component } from "react";
import SearchArea from "../components/booksComponents/SearchArea";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  handleSearch = (event) => {
      console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div>
        <SearchArea handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default Books;
