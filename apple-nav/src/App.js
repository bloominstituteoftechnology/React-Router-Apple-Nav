import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import SubNav from "./components/SubNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Apple Nav Project</h1>
        <Route path="/" component={Home} />
        <Route path="/:name" component={SubNav} />
      </div>
    );
  }
}

export default App;
