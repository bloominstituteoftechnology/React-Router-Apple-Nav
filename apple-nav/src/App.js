import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import {Route} from 'react-router-dom'
import data from './data'

class App extends Component {
  constructor(){
    super();
    this.state={data: data}
  }
  render() {
    return (
      <div className="App">
      <Header data={this.state.data} />
        
      </div>
    );
  }
}

export default App;
