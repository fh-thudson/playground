import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageURL: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}> {tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    // console.log("props ", this.props.counter);

    return (
      <div>
        {/* <img src={this.state.imageURL} alt="random" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
        <button
          // onClick={this.resetCountToZero}
          className="btn btn-warning btn-sm m-2"
        >
          reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  // old code would be deleted in production
  // handleIncrement = () => {
  //   // this.state.count++;
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  resetCountToZero = () => {
    this.setState({ value: 0 });
  };

  formatCount() {
    // const { value: value } = this.state;
    const value = this.props.counter.value;
    // if (count === 0) {
    //   return "Zero";
    // } else {
    //   return count;
    // }
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
