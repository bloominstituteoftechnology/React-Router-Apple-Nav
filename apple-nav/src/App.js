import React, { Component } from 'react';
import data from './Components/data';
import './App.css';
import NavWrapper from './Components/NavWrapper';

class App extends Component {
  constructor(){
    super();
    this.state = {
      linkData: []
    }
  }

  componentDidMount() {
    this.setState({
      linkData: data
    })
  }

  render() {
    return (
      <div className="App">
        <NavWrapper linkData={this.state.linkData} />
      </div>
    );
  }
}

export default App;
