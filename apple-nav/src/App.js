import React, { Component } from 'react';
import Nav from './components/Nav';
import SubNav from './components/SubNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SubNav />
      </div>
    );
  }
}

export default App;
