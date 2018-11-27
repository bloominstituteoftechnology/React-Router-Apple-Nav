import React, { Component } from "react";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import DummyData from "./DummyData";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: DummyData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <NavWrapper />
      </div>
    );
  }
}

export default App;
