import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import { navNames } from './AppData';



class App extends Component {
  constructor(){
    super();
    this.state = {
      navNames: navNames
    }
  }
  render() {
    return (
      <div>
        <Nav names={this.state.navNames}/>
        {/* <div>
          
          <div>
            <img src={require("./iconImgs/mac/accesories.png")} alt="Accesories"></img>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
