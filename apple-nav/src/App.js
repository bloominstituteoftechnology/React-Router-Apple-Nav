import React from "react";
import NavWrapper from "./components/NavWrapper";
import Home from "./Home";
import MacLinks from "./MacLinks";

import { Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import navLinks from "./navLinks";

const FullWidthNav = styled.div`
  width: 100%;
  background: rgba(45, 45, 45, 0.98);
  height: 44px;
  font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
`;

class App extends React.Component {
  state = {
    navLinks: navLinks
  };
  render() {
    return (
      <div className="App">
        <FullWidthNav>
          <NavWrapper navLinks={this.state.navLinks} />
        </FullWidthNav>
        <Route
          path="/Mac"
          render={props => (
            <MacLinks navLinks={this.state.navLinks} {...props} />
          )}
        />
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;
