import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MacBar from './MacBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      macBar: []
    };
  }

  render(){
    return (
      <div>
        <MacBar />
      </div>
    );
  }
}

export default App;
