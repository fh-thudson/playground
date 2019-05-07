import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Switch } from "react-router";

import "bootstrap/dist/css/bootstrap.css";

// import App from "./App.jsx";
// import Counters from "./components/counters";
import ErrorPage from "./components/errorpage";
// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={Counters} />
//     </div>
//   </Router>
// );
// console.log(element);
// ReactDOM.render(<Counters />, document.getElementById("main"));
// ReactDOM.render(<SimpleNav />, document.getElementById("navHolder"));
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<ErrorPage />, document.getElementById("root"));
// ReactDOM.render(routing, document.getElementById("root"));
