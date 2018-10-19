import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import data from './apple-data';
class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount = () => {
    this.setState({
      products: data
    })
  }
  render() {
    return (
      <div className="App">
        <Nav data={this.state.products}/>
      </div>
    );
  }
}

export default App;
