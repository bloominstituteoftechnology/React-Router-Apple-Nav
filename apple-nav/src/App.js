import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NavWrapper from './components/NavWrapper';
import data from './data'


class App extends Component {
  constructor() {
    super();
    this.state = {
      navigation: data
    }
  }
  render() {
    return (
      <NavWrapper navigation={this.state.navigation}/>
    );
  }
}

export default App;
