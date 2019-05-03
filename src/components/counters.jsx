import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.addNewCounter}
          className="btn btn-success m-2"
        >
          Add
        </button>
        <button onClick={this.props.onReset} className="btn btn-danger m-2">
          Reset All Values
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            handleIncrement={this.props.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
