import React, { Component } from "react";
// import ReactDom from "react-dom";

class SimpleNav extends Component {
  state = {
    links: [
      { id: 1, link: "counters", name: "Counters", active: true },
      //   { id: 2, link: "lookUp", name: "Look Up", active: false },
      { id: 2, link: "Item", name: "Item", active: false }
    ]
  };
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">{this.makeMenu()}</ul>
        </div>
      </nav>
    );
  }

  makeMenu() {
    return this.state.links.map(link => (
      <li key={link.id} className="nav-item">
        <a
          className={link.active === true ? "nav-link active" : "nav-link"}
          //   onClick={this.changeMain(link.id)}
          //   href="javascript:changeMain({link.id})"
          //   href={this.changeMain(link.id)}
          // have to come back to this when i have a router i guess...
        >
          <span data-feather="home" />
          {link.name}
        </a>
      </li>
    ));
  }

  changeMain = id => {
    console.log("changed");
    console.log(id);
  };
}

export default SimpleNav;
