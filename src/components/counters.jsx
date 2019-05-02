import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} />
        ))}
        <button onClick={this.resetValues} className="btn btn-danger">
          Reset All Values
        </button>
      </div>
    );
  }

  resetValues = () => {
    this.state.counters.map(counter => console.log(counter));
    this.state.counters.map(counter => counter.resetCountToZero);

    // this.setState({
    // counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    // });
  };
}

export default Counters;
