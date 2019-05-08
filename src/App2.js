import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Search from "./components/search";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <div>
        <Route path="/" exact component={Search} />
        <Route path="/search/" exact component={Search} />
        <Route path="/counters/" component={Counters} />
      </div>
    </Router>
  );
}

export default AppRouter;
