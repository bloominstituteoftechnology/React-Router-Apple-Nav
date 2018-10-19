import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav';
import { navData } from './AppData';



class App extends Component {
  constructor(){
    super();
    this.state = {
      navData: navData
    }
  }
  render() {
    return (
      <div>
        <Nav navData={this.state.navData}/>
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
