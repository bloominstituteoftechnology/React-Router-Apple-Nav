import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import SubNav from './components/NavBar/SubNav';
import data from './components/Data';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Nav} />
        <Route exact path={`/:product`}
               render={props => <SubNav {...props} products={data}/>} />
      </div>
    );
  }
}

export default App;
