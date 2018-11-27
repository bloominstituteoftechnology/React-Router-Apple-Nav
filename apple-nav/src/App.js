import React, { Component } from 'react';
import './App.css';
import data from './DummyData'
import { Route } from "react-router-dom";
import NavLinks from './components/NavLinks';


class App extends Component {
  constructor(){
    super();
    this.state={
      navLinks: data
    };
  }



  render() {console.log(this.state.navLinks)
    return (
      <div className="navBar">
        <Route path="/" render={props =>(<NavLinks  {...props} links={this.state.navLinks}/>)} />
        
      
      </div>
    );
  }
}

export default App;
