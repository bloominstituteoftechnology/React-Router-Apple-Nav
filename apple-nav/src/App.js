import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
// import Data from "./Data";

import NavWrapper from "./components/NavWrapper/NavWrapper";
import SubNav from "./components/SubNav/SubNav";
import Data from "./Data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // data: Data
      data: []
    };
  }

  // componentDidMount() {
  //   this.setState({ data: Data });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Apple Nav Bar</h1>
        </header>

        {/* <NavWrapper data={this.state.data} /> */}
        <Route path="/" component={NavWrapper} />
        <Route
          path="/Mac"
          render={props => <SubNav {...props} data={Data[0].subCategory} />}
        />
        <Route
          path="/iPad"
          render={props => <SubNav {...props} data={Data[1].subCategory} />}
        />
        <Route
          path="/iPhone"
          render={props => <SubNav {...props} data={Data[2].subCategory} />}
        />
        <Route
          path="/Watch"
          render={props => <SubNav {...props} data={Data[3].subCategory} />}
        />
        <Route
          path="/TV"
          render={props => <SubNav {...props} data={Data[4].subCategory} />}
        />
        <Route
          path="/Music"
          render={props => <SubNav {...props} data={Data[5].subCategory} />}
        />
      </div>
    );
  }
}

export default App;
