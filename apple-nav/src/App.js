import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import SubNav from "./components/SubNav/SubNav";
import DummyData from "./DummyData";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appleData: []
    };
  }

  componentDidMount() {
    this.setState({ appleData: DummyData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img
              src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
              alt="apple-logo"
            />

            {this.state.appleData.map(data => (
              <NavWrapper link={data} key={data.name} />
            ))}
            <img
              src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
              alt=""
            />
            <img
              src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
              alt=""
            />
          </nav>
          <div className="subNav">
            <Route
              path={`/:name`}
              render={props => <SubNav {...props} apl={this.state.appleData} />}
            />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
