import React, { Component } from "react";

class SimpleNav extends Component {
  state = {
    links: [
      { id: 1, link: "counters", name: "Counters", active: true },
      { id: 2, link: "lookUp", name: "Look Up", active: false },
      { id: 3, link: "random", name: "Random ", active: false }
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
          href={link.link}
        >
          <span data-feather="home" />
          {link.name}
        </a>
      </li>
    ));
  }
}

export default SimpleNav;
