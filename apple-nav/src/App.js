import React, { Component } from 'react';
import './App.css';
import {NavLink} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul className="NavWrapper">
        <li>
          <NavLink activeclassName="activeNavButton" to="/">
          Mac
          </NavLink>
          </li>
          <li>
          <NavLink activeclassName="activeNavButton" to="/">
          ipad
          </NavLink>
            </li>
            <li>
          <NavLink activeclassName="activeNavButton" to="/">
          iPhone
          </NavLink>
            </li>
            <li>
          <NavLink activeclassName="activeNavButton" to="/">
          Watch
          </NavLink>
            </li>
            <li>
          <NavLink activeclassName="activeNavButton" to="/">
          TV
          </NavLink>
            </li>
            <li>
          <NavLink activeclassName="activeNavButton" to="/">
          Music
          </NavLink>
            </li>
            <li>
          <NavLink activeclassName="activeNavButton" to="/">
          Support
          </NavLink>
            </li>
        </ul>
      </div>
    );
  }
}

export default App;
