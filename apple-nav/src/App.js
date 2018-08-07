import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Subnav from './components/subnav';
import Subnavmenu from './components/subnavmenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
          {subnav: 'Mac',
           navitems:  [
             'MacBook',
             'MacBook Air',
             'MacBook Pro',
             'iMac',
             'iMac Pro',
             'Mac Pro',
             'Mac mini',
             'Accessories',
             'High Sierra',
             'Compare',
            ]
          },
          {subnav: 'iPad',
          navitems:  [
            'iPad Pro',
            'iPad',
            'iPad mini 4',
            'iOS 11',
            'Accessories',
            'Compare'
          ]},
          {subnav: 'iPhone',
          navitems:  [
            'iPad Pro',
            'iPad',
            'iPad mini 4',
            'iOS 11',
            'Accessories',
            'Compare'
          ]},
          {subnav: 'Watch',
          navitems:  [
            'watchstuff',
          
          ]},
          {subnav: 'TV',
          navitems:  [
            'tv stuff',
           
          ]},
          {subnav: 'Music',
          navitems:  [
            'musicalstuff',
            
          ]},
          {subnav: 'Support',
          navitems:  [
            'stuff',
          ]},
      ]
    };
  }
  render() {
    return (
      <div className="App">
       <NavWrapper nav={this.state.nav}/>
        <Route path='/nav/:subnav' render={(props) => <Subnav {...props} nav={this.state.nav}/>}/>
      </div>
    );
  }
}

export default App;
