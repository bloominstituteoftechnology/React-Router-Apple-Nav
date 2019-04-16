import React, { Component } from "react";
import "./App.css";
import NavWrapper from "./Components/NavWrapper";
import SubNav from "./Components/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: "Thing"
    };
  }

  handleClick = test => {
    this.setState({ test });
  };

  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
