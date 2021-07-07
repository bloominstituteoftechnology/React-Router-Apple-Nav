import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import NavWrapper from './components/Nav/NavWrapper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
    }
  }
componentDidMount() {
  this.setState({menu: Menu});
}

  render() {
    return (
      <div>
    <Route path = '/' render={props=> (
        <NavWrapper {...props} menu = {this.state.menu} />
      )} />
      </div>
    );
  }
}

export default App;
