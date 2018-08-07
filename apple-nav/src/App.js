import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from './components/Home/Home';
import Mac from './components/Mac/Mac';
import Ipad from './components/iPad/iPad';
import Iphone from './components/iPhone/iPhone';
import Watch from './components/Watch/Watch';
import Tv from './components/TV/TV';
import Music from './components/Music/Music';
import Support from './components/Support/Support';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <ul className="nav-bar">
          <div className="nav-container">
            <li><NavLink exact to="/" className="nav-text">Home</NavLink></li>
            <li><NavLink to="/mac" className="nav-text">Mac</NavLink></li>
            <li><NavLink to="/ipad" className="nav-text">iPad</NavLink></li>
            <li><NavLink to="/iphone" className="nav-text">iPhone</NavLink></li>
            <li><NavLink to="/watch" className="nav-text">Watch</NavLink></li>
            <li><NavLink to="/tv" className="nav-text">TV</NavLink></li>
            <li><NavLink to="/music" className="nav-text">Music</NavLink></li>
            <li><NavLink to="/support" className="nav-text">Support</NavLink></li>
          </div>
          
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/mac/" component={Mac} />
        <Route exact path="/ipad/" component={Ipad} />
        <Route exact path="/iphone/" component={Iphone} />
        <Route exact path="/watch/" component={Watch} />
        <Route exact path="/tv/" component={Tv} />
        <Route exact path="/music/" component={Music} />
        <Route exact path="/support/" component={Support} />
      </div>
    );
  }
}

export default App;
