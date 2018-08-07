import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Home from './components/Home';

import Mac from './components/Mac/Mac';
import MacBook from './components/Mac/MacBook';
import MacBookAir from './components/Mac/MacBookAir';
import MacBookPro from './components/Mac/MacBookPro';
import iMac from './components/Mac/iMac';
import iMacPro from './components/Mac/iMacPro';
import MacPro from './components/Mac/MacPro';
import MacMini from './components/Mac/MacMini';
import MacAccessories from './components/Mac/MacAccessories';
import HighSierra from './components/Mac/HighSierra';
import MacCompare from './components/Mac/MacCompare';

import iPad from './components/iPad/iPad';
import iPadPro from './components/iPad/iPadPro';
import iPad97 from './components/iPad/iPad97';
import iPadMini from './components/iPad/iPadMini';
import iOS11 from './components/iPad/iOS11';
import iPadAccessories from './components/iPad/iPadAccessories';
import iPadCompare from './components/iPad/iPadCompare';

import iPhone from './components/iPhone/iPhone';
import Watch from './components/Watch/Watch';
import TV from './components/TV/TV';
import Music from './components/Music/Music';
import Support from './components/Support';



const parentLinks = [
  {name: '\uf8ff', url: '/'},
  {name: 'Mac', url: '/mac'},
  {name: 'iPad', url: '/ipad'},
  {name: 'iPhone', url: '/iphone'},
  {name: 'Watch', url: '/watch'},
  {name: 'TV', url: '/tv'},
  {name: 'Music', url: '/music'},
  {name: 'Support', url: '/support'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper list={parentLinks} />
      
        <Route exact path='/' component={Home} />
        <Route exact path='/mac' component={Mac} />
        <Route exact path='/ipad' component={iPad} />
        <Route exact path='/iphone' component={iPhone} />
        <Route exact path='/watch' component={Watch} />
        <Route exact path='/tv' component={TV} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/support' component={Support} />

        <Route exact path='/macbook' component={MacBook} />
        <Route exact path='/macbook-air' component={MacBookAir} />
        <Route exact path='/macbook-pro' component={MacBookPro} />
        <Route exact path='/imac' component={iMac} />
        <Route exact path='/imac-pro' component={iMacPro} />
        <Route exact path='/mac-pro' component={MacPro} />
        <Route exact path='/mac-mini' component={MacMini} />
        <Route exact path='/mac-accessories' component={MacAccessories} />
        <Route exact path='/high-sierra' component={HighSierra} />
        <Route exact path='/mac-compare' component={MacCompare} />

        <Route exact path='/ipad-pro' component={iPadPro} />
        <Route exact path='/ipad-9.7' component={iPad97} />
        <Route exact path='/ipad-mini-4' component={iPadMini} />
        <Route exact path='/ios11' component={iOS11} />
        <Route exact path='/ipad-accessories' component={iPadAccessories} />
        <Route exact path='/ipad-compare' component={iPadCompare} />
      </div>
    );
  }
}

export default App;
