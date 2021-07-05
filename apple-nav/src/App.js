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
             {img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macbook_dark_large.svg",
             name: 'MacBook'},
             {img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookair_dark_large.svg",
              name:'MacBook Air'},
            {name: "MacBook Pro",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro_dark_large.svg"},
            {name: "iMac",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_dark_large.svg"},
            {name: "iMac Pro",
             img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/imac_pro_dark_large.svg"
            },
            {name: "Mac Pro",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macpro_dark_large.svg"
            },
            {name: "Mac mini",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/macmini_dark_large.svg"
            },
            {name: "Accessories",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_acc_dark_large.svg"
            },
            {name: "High Sierra",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_osx_dark_large.svg"
            },
            {name: "Compare",
            img:"https://www.apple.com/v/mac/home/ab/images/familybrowser/mac_comp_dark_large.svg"
            }
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
