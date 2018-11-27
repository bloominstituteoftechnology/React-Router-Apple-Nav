import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import SubNav from "./components/SubNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/:name" component={SubNav} />
        <h1>
          Welcome to Pretend Apple Nav Homepage!
          <br />
          Hope you hate it!
        </h1>
      </div>
    );
  }
}

export default App;
