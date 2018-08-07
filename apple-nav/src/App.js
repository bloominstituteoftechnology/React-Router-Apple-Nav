import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/home/Home";
import Mac from "./components/mac/Mac";
import IPad from "./components/ipad/IPad";
import IPhone from "./components/iphone/IPhone";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="NavWrapper">
        <ul>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/">
              Apple
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/mac">
              Mac
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/iphone">
              IPhone
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/ipad">
              IPad
            </NavLink>
          </li>
        </ul>
        {/* End navWrapper */}

        <Route exact path="/" component={Home} />
        <Route path="/mac" component={Mac} />
        <Route path="/iphone" component={IPhone} />
        <Route path="/ipad" component={IPad} />
      </div>
    );
  }
}

export default App;
