import React, { Component } from "react";
import { Route } from "react-router-dom";

import data from "./data";

import "./App.css";
import TopNav from "./Components/TopNav";
import SubNav from "./Components/SubNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log(data);
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
        <TopNav data={this.state.data} />

        {this.state.data.length && (
          <Route
            path="/:category"
            render={props => <SubNav {...props} items={this.state.data} />}
          />
        )}
      </div>
    );
  }
}

export default App;
