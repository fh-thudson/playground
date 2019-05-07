import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Search from "./components/search";
import Types from "./components/types";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
    types: []
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

  handleKeyUpOnSearch = () => {
    let s = document.getElementById("textInput");
    console.log(s.value);
    fetch(
      "https://esi.evetech.net/latest/search/?categories=inventory_type&datasource=tranquility&language=en-us&search=" +
        s.value +
        "&strict=false"
    )
      .then(results => {
        // console.log(results);
        if (results !== null) {
          return results.json();
        } else {
          return "";
        }
      })
      .then(data => {
        // const types =
        // console.log(data.inventory_type);
        if (data.inventory_type !== undefined && data.inventory_type !== null) {
          const types = data.inventory_type.map(id => {
            return {
              id: id,
              imgUrl: "https://imageserver.eveonline.com/Type/" + id + "_64.png"
            };
          });
          this.setState((this.state.types = types));
        }
      });
  };

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

  getTotalCountersValue = () => {
    let total = 0;
    const counters = this.state.counters.map(c => {
      // console.log("ID: " + c.id + " value:" + c.value);
      // total = total + c.value;
      total += c.value;
    });
    return total;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          distinctCounters={this.state.counters.filter(c => c.value > 0).length}
          // totalValue={this.state.totalValue}
          totalValue={this.getTotalCountersValue()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.resetValues}
            onDelete={this.handleDelete}
            addNewCounter={this.addNewCounter}
            resetCounterById={this.resetCounterById}
            handleIncrement={this.handleIncrement}
          />
          <hr />
          <Search handleOnKeyUp={this.handleKeyUpOnSearch} />
          <hr />
          <Types types={this.state.types} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
