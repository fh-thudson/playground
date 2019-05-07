import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <input
        className="form-control"
        onKeyUp={this.props.handleOnKeyUp}
        placeholder="Search for Items"
        id="textInput"
      />
    );
  }
}

export default Search;
