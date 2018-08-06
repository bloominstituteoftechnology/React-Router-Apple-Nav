import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/1" activeClassName="isSelected">1 item</NavLink>
        <NavLink to="/2" activeClassName="isSelected">2 item</NavLink>
        <NavLink to="/3" activeClassName="isSelected">3 item</NavLink>
        <NavLink to="/4" activeClassName="isSelected">4 item</NavLink>
        <NavLink to="/5" activeClassName="isSelected">5 item</NavLink>

        <Route exact path="/" component={() => TestingHeader(1)}/>
        <Route exact path="/1" component={() => TestingHeader(1)}/>
        <Route exact path="/2" component={() => TestingHeader(2)}/>
        <Route exact path="/3" component={() => TestingHeader(3)}/>
        <Route exact path="/4" component={() => TestingHeader(4)}/>
        <Route exact path="/5" component={() => TestingHeader(5)}/>
      </div>
    );
  }
}

function TestingHeader(num) {
  return (
    <div>
      <TestingList num={num} />
      <h1>Main page - {`${num}`}</h1>
    </div>
  )
}

function TestingList(props) {
  const { num } = props;
  return (
    <div>
      <li className="catergory-nav">
        <ul>1. for nav {num} </ul>
        <ul>2. for nav {num} </ul>
        <ul>3. for nav {num} </ul>
        <ul>4. for nav {num} </ul>
        <ul>5. for nav {num} </ul>
      </li>
    </div>
  )
}

export default App;
