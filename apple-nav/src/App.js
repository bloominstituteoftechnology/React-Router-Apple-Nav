import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NavWrapper} />
        <Route exact path="/:name" component={SubNav} />
      </div>
    );
  }
}

export default App;
