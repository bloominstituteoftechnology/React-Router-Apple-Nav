import React, { Component } from "react";
import "./App.css";
import NavWrapper from "./components/NavWrapper";
import SubNav from "./components/SubNav";

const NavList = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

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
        <NavWrapper navs={NavList} handleClick={this.handleClick} />
        <SubNav />
      </div>
    );
  }
}

export default App;
