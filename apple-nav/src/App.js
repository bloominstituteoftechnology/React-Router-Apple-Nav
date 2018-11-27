import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import dummyData from './DummyData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
  }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <NavWrapper data={this.state.data}/>
      </div>
    );
  }
}

export default App;
