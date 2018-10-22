import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SubBar from './components/SubBar';
import './App.css';

class App extends Component {
 constructor() {
   super();
   this.state = {
     currentTab: 'none'
   }
 }

 render() {
   return(
     <div className='App'>
      <Route exact path='/' component={NavBar} />
      <Route path='/:id' component={SubBar} />
     </div>
   )
 }
}

export default App;
