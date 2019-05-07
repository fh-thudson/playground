import React, { Component } from "react";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <p>This page does not exist!</p>
          <a href="/">Go back here!</a>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorPage;
