import React, { Component } from "react";
import { Route } from "react-router-dom";

import data from "./data";

import "./App.css";
import TopNav from "./Components/TopNav";

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
        <TopNav />
      </div>
    );
  }
}

export default App;
