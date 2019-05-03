import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // destructing
    const {
      onReset,
      onDelete,
      counters,
      addNewCounter,
      resetCounterById,
      handleIncrement
    } = this.props;

    return (
      <div>
        <button onClick={addNewCounter} className="btn btn-success m-2">
          Add
        </button>
        <button onClick={onReset} className="btn btn-danger m-2">
          Reset All Values
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            handleIncrement={handleIncrement}
            resetCounterById={resetCounterById}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
