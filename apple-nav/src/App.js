import React, { Component } from 'react';

import './App.css';
import NavBar from './NavComponents/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "none"
    };
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     Header
      //   </header>
      // </div>
      <NavBar />
    );
  }
}

export default App;
