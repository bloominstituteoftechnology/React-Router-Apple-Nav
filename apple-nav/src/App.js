import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from "./components/nav";
import navData from './components/navData';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      navLists :navData,
    }
  }
  render() {
    return (
      <Route path='/' render={(props)=> <Nav {...props} navlists={this.state.navLists}/>}/>
    );
  }
}

export default App;
