import React, { Component } from 'react';
import './App.css';
import Data from './Data';

import NavWrapper from './components/NavWrapper/NavWrapper';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Data
    }
  }

  // componentDidMount() {
  //   this.setState({data : Data})
  // }

  render() {
    return (
      <div className="App">

        <header className="App-header">         
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <NavWrapper data = {this.state.data} />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
