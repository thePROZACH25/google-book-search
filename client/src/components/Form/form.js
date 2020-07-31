import React from "react";

function Form({ handleInputChange, searchBook, handleFormSubmit }) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">
            <h4>Search and Save Books You Like</h4>
          </label>
          <input
            onChange={handleInputChange}
            value={searchBook}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Books Here"
            id="search"
          />
          <button onClick={handleFormSubmit} className="btn btn-dark mt-3 mb-5">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
