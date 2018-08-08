import React, { Component } from 'react';
import './App.css';
import NavWrap from './components/NavWrap';
import { Route } from 'react-router-dom';
import {mainLink} from './data';
import SubNav from './components/SubNav'

class App extends Component {
  render() { 
    return (     
      <div> 
      <Route path = '/' render = {props => <NavWrap {...props} link = {mainLink} />} />         
      <Route path = '/:id' render = {props => <SubNav {...props} link = {mainLink[props.match.params.id - 1].subLink} />} />
      </div>     
    );
  }
}

export default App;
