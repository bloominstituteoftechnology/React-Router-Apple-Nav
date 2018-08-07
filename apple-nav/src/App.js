import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Characters from "./Components/Characters.js";
import CharacterPage from "./Components/CharacterPage.js";
import characters from "./data/characters";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/characters">
              Avengers
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/characters"
          render={props => <Characters {...props} characters={characters} />}
        />
        <Route
          path="/characters/:id"
          render={props => <CharacterPage {...props} characters={characters} />}
        />
      </div>
    );
  }
  }

  function Home() {
  return (
    <div>
      <h1>Avengers Database</h1>
      <h4>Enter below:</h4>
      <p>Warning: this data is classified!</p>

      <Link to="/characters">Enter</Link>
    </div>
  );
}


export default App;
