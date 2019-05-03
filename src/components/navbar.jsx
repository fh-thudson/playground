import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Play Ground Distinct:{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.distinctCounters}
            </span>{" "}
            Total Value:{" "}
            <span className="badge badge-pill badge-success">
              {this.props.totalValue}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
