import React, { Component } from 'react';
import './App.css';
import NavWrap from './components/NavWrap';
import { Route } from 'react-router-dom';

import {mainLink} from './data';

class App extends Component {
  render() { console.log(mainLink.subLink)
    return (
      
      <Route path = '/' render = {props => <NavWrap {...props} link = {mainLink} />} />      
      
    );
  }
}

export default App;
