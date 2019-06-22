import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navData: []
    }
  }
  
  componentDidMount() {
    const dataCopy = data;
    this.setState({ navData: dataCopy })
  }
  
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <NavBar {...props} data={this.state.navData} />}
        />
      </div>
    );
  }
}

export default App;
