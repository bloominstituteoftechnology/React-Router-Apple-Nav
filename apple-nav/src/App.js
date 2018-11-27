import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import data from "./data";
import Home from "./components/Home";
import SubNav from "./components/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: data });
  }
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Home {...props} data={this.state.data} />}
        />
        <Route
          path="/:name"
          render={props => <SubNav {...props} data={this.state.data} />}
        />
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
