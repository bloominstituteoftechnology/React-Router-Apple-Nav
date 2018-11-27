import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import TopNav from "./Components/TopNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
      </div>
    );
  }
}

export default App;
