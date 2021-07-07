import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/home/Home";
import Mac from "./components/mac/Mac";
import IPad from "./components/ipad/IPad";
import IPhone from "./components/iphone/IPhone";
import ProductPage from "./components/productPage/ProductPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <div className="navWrapper">
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
                iPhone
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeNavButton" to="/ipad">
                iPad
              </NavLink>
            </li>
          </ul>
          {/* End navWrapper */}
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/mac" component={Mac} />
        <Route path="/iphone" component={IPhone} />
        <Route path="/ipad" component={IPad} />
        <Route path="/productPage/:productName" component={ProductPage} />
      </div>
    );
  }
}

export default App;
