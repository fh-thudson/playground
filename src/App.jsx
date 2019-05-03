import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  resetValues = () => {
    this.state.counters.map(counter => console.log(counter));
    // this.state.counters.map(counter => counter.resetCountToZero);

    // this.setState({
    // counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    // });
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = counter => {
    // counter.value++; // what I want to do.
    //
    // what I tried to do
    // const counters = this.state.counters;
    // counters[counter.id].value++;
    // this.setState(counters);
    //
    // correct way under here.
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  resetCounterById = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Handle Delete Event fired!", counterId);
    const newCounters = this.state.counters.filter(c => c.id !== counterId); // great example of why I dislike react
    this.setState({ counters: newCounters });
  };

  // getCurrentId = () => {
  //   // might need to be reworked I hate this doing in javascript.
  //   const lastId = 0;
  //   const counters = this.state.counters.sort(counter => (lastId = counter.id));
  //   // counters.map(counter => (lastId = counter.id));
  //   return lastId;
  // };

  addNewCounter = () => {
    console.log("Add Call");
    // should be handled on the API server side but time to cowboy up.
    // let newId = this.getCurrentId() + 1; // idk
    let newId = 1;
    const l = this.state.counters.length;
    const currentCounters = this.state.counters;
    if (l !== 0) {
      newId = this.state.counters[l - 1].id + 1;
    } else {
      console.log("length is zero");
      // newId = 1;
    }
    console.log(newId);
    currentCounters.push({ id: newId, value: 0 });
    this.setState({ counter: currentCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.resetValues}
            onDelete={this.handleDelete}
            addNewCounter={this.addNewCounter}
            resetCounterById={this.resetCounterById}
            handleIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
