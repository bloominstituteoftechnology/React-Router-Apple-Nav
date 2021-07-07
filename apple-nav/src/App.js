import React, { Component, Fragment } from 'react';
import {Route, Link} from 'react-router-dom'; 

import './App.css';
import HomeNav from './components/HomeNav';
import Chosen from './components/Chosen';

class App extends Component {
  render() {
    return (
      
      <div>
          <Route path='/' component={HomeNav} />
          <Route path='/:id' component={Chosen} />
          
      </div>
    );
  }
}
// Apple Logo  Mac iPad iPhone Watch TV Music Support *search thingy*  notepade 
export default App;
