import React, { Component } from 'react';
import './App.css';

import NavWrapper from './components/NavWrapper';
import { Route } from 'react-router-dom';
import SubNav from './components/SubNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
        <Route exact path="/" component={Home} />
        <Route path="/:name" component={SubNav} />
      </div>
    );
  }
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
export default App;
