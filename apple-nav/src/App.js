import React, { Component } from 'react';
import './App.css';
import { categories } from './categories.js';
import NavWrapper from './components/NavWrapper.js';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navArr: [],
      subNavArr: []
    }
  }

  componentDidMount() {
    this.setState({ navArr: categories });
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={props => (<NavWrapper {...props} navArr={this.state.navArr} subNavArr={this.state.subNavArr} />)} />
      </div>
    );
  }
}

export default App;
