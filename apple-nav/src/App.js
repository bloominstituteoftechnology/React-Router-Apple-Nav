import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/Home/Home";
import Mac from "./components/Mac/Mac";
import IPad from "./components/IPad/IPad";
import IPhone from "./components/IPhone/IPhone";
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
            <NavLink activeClassName="activeNavButton" to="/Mac">
              Mac
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/IPhone">
              IPhone
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/IPad">
              IPad
            </NavLink>
          </li>
        </ul>
        {/* End navWrapper */}

        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Mac} />
        <Route exact path="/" component={IPhone} />
        <Route exact path="/" component={IPad} />
      </div>
    );
  }
}

export default App;
