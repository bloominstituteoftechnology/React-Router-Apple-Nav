import React, { Component } from 'react';
import './App.css';
import NavContainer from './Components/NavContainer';
import { Route } from 'react-router-dom';
import SubNav from './Components/SubNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
        <div className="app-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/:product" component={SubNav} />
        </div>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="home">
      <h1>Explore our products!</h1>
    </div>
  )
}

export default App;
