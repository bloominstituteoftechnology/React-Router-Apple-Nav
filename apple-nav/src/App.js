import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import SubNavHeader from "./SubNavHeader";
import NavHeader from "./NavHeader";
import Categories from "./Categories";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.setState({
      categories: Categories
    });
  }

  render() {
    return (
      <div className="App">
        <NavHeader categories={this.state.categories} />
        <Route
          exact
          path="/:categoryName"
          render={props => (
            <SubNavHeader {...props} categories={this.state.categories} />
          )}
        />
      </div>
    );
  }
}

export default App;
