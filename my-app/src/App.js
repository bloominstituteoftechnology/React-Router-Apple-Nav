import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Route from 'react-router-dom/Route';
import Navigation from './component/Navigation/Navigation';
import MacNav from './component/Mac/MacNav';
import iPadNav from './component/iPad/iPadNav';
import iPhoneNav from './component/iPhone/iPhoneNav';
import WatchNav from './component/Watch/WatchNav';
import TVNav from './component/TV/TVNav';
import MusicNav from './component/Music/MusicNav';
import MacBook from './component/Mac/MacBook';
import MacBookAir from './component/Mac/MacBookAir';
import MacBookPro from './component/Mac/MacBookPro';
import iMac from './component/Mac/iMac';
import iMacPro from './component/Mac/iMacPro';
import MacPro from './component/Mac/MacPro';
import MacMini from './component/Mac/MacMini';
import MacAccessories from './component/Mac/Accessories';
import HighSierra from './component/Mac/HighSierra';
import MacCompare from './component/Mac/Compare';


import Switch from 'react-router-dom/Switch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Switch>
          <Route path="/mac" component={MacNav} />
          <Route path="/ipad" component={iPadNav} />
          <Route path="/iphone" component={iPhoneNav} />
          <Route path="/watch" component={WatchNav} />
          <Route path="/tv" component={TVNav} />
          <Route path="/music" component={MusicNav} />
          
          <Route path="/macbook" component={MacBook} />
          <Route path="/macbook-air" component={MacBookAir} />
          <Route path="/macbook-pro" component={MacBookPro} />
          <Route path="/imac" component={iMac} />
          <Route path="/imac-pro" component={iMacPro} />
          <Route path="/mac-pro" component={MacPro} />
          <Route path="/mac-mini" component={MacMini} />
          <Route path="/mac-accessories" component={MacAccessories} />
          <Route path="/high-sierra" component={HighSierra} />
          <Route path="/mac-compare" component={MacCompare} />


        </Switch>
      </div>
    );
  }
}

export default App;
