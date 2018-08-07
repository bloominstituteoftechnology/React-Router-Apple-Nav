import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <ul className="nav-bar">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/mac">Mac</NavLink></li>
          <li><NavLink to="/ipad">iPad</NavLink></li>
          <li><NavLink to="/iphone">iPhone</NavLink></li>
          <li><NavLink to="/watch">Watch</NavLink></li>
          <li><NavLink to="/tv">TV</NavLink></li>
          <li><NavLink to="/music">Music</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/mac/" component={Mac} />
        <Route exact path="/ipad/" component={iPad} />
        <Route exact path="/iphone/" component={iPhone} />
        <Route exact path="/watch/" component={Watch} />
        <Route exact path="/tv/" component={TV} />
        <Route exact path="/music/" component={Music} />
        <Route exact path="/support/" component={Support} />
      </div>
    );
  }
}

export default App;
