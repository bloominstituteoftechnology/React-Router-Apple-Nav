import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data';
console.log(data)
class App extends Component {
  render() {
    return (
      <div className="App">
        {data.macData.map(element => {
          return <div>{element.name}</div>
        })}
        {data.ipadData.map(ele => <div>div</div>)}
      </div>
    );
  }
}

export default App;
