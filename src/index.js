import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import SimpleNav from "./components/simpleNav";
import Item from "./components/item";
// const element = <h1>Hello world</h1>;

// console.log(element);
ReactDOM.render(<Counters />, document.getElementById("main"));
ReactDOM.render(<SimpleNav />, document.getElementById("navHolder"));
