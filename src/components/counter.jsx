import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageURL} alt="random" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
        <button
          onClick={this.resetCountToZero}
          className="btn btn-danger btn-sm m-2"
        >
          reset
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  handleIncrement = () => {
    // this.state.count++;
    // console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  resetCountToZero = () => {
    this.setState({ count: 0 });
  };

  formatCount() {
    const { count } = this.state;

    // if (count === 0) {
    //   return "Zero";
    // } else {
    //   return count;
    // }
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
