import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";
import DummyData from "./data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: DummyData
    };
  }
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <MainNav {...props} data={this.state.data} />}
        />
        <Route
          path="/:itemName"
          render={props => <SubNav {...props} data={this.state.data} />}
        />
      </div>
    );
  }
}

export default App;
