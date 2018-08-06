import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/1" activeClassName="isSelected">1</NavLink>
        <NavLink to="/2" activeClassName="isSelected">2</NavLink>
        <NavLink to="/3" activeClassName="isSelected">3</NavLink>
        <NavLink to="/4" activeClassName="isSelected">4</NavLink>
        <NavLink to="/5" activeClassName="isSelected">5</NavLink>

        <Route exact path="/" component={() => testingHeader(1)}/>
        <Route exact path="/1" component={() => testingHeader(1)}/>
        <Route exact path="/2" component={() => testingHeader(2)}/>
        <Route exact path="/3" component={() => testingHeader(3)}/>
        <Route exact path="/4" component={() => testingHeader(4)}/>
        <Route exact path="/5" component={() => testingHeader(5)}/>
      </div>
    );
  }
}

function testingHeader(num) {
  return <h1>Testing{`${num}`}</h1>
}

export default App;
