import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navwrapper from './components/Navwrapper';
import Subnav from './components/subnav';
import Subnavmenu from './components/subnavmenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
          {subnav: 'Mac',
           navitems:  [
             {name: 'MacBook'},
             { name:'MacBook Air'},
            {name: "MacBook Pro",},
            {name: "iMac",},
           
            {name: "iMac Pro",},
            
           
            {name: "Mac Pro",},
            
           
            {name: "Mac mini",},
           
           
            {name: "Accessories",},
            
            
            {name: "High Sierra",},
            {name: "Compare",
            
            }
           ]
          },

          {subnav: 'iPad',
          navitems:  [
            {name: 'iPad Pro',},
            {name: 'iPad',},
            {name: 'iPad mini 4',},
            {name: 'iOS 11',},
            {name: 'Accessories',},
            {name: 'Compare',},
          ]},

      ]
    };
  }
  render() {
    return (
      <div className="App">
       <Navwrapper nav={this.state.nav}/>
        <Route path='/nav/:subnav' render={(props) => <Subnav {...props} nav={this.state.nav}/>}/>
      </div>
    );
  }
}

export default App;
