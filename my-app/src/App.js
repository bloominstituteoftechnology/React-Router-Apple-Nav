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
import Support from './component/Support/Support'

// import MacBook from './component/Mac/MacBook';
// import MacBookAir from './component/Mac/MacBookAir';
// import MacBookPro from './component/Mac/MacBookPro';
// import iMac from './component/Mac/iMac';
// import iMacPro from './component/Mac/iMacPro';
// import MacPro from './component/Mac/MacPro';
// import MacMini from './component/Mac/MacMini';
// import MacAccessories from './component/Mac/Accessories';
// import HighSierra from './component/Mac/HighSierra';
// import MacCompare from './component/Mac/Compare';

import { MacBook, MacBookAir, MacBookPro, iMac, iMacPro, MacPro, MacMini, MacAccessories, HighSierra, MacCompare} from './component/Mac/MacPages';

import { iPadPro, iPad, iPadMini4, iOS11, iPadAccessories, iPadCompare} from './component/iPad/iPadPages';

import { iPhoneX, iPhone8, iPhone7, iPhone6s, iPhoneSE, iPhoneiOS, iPhoneAccessories, iPhoneCompare} from './component/iPhone/iPhonePages'

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
          <Route path="/support" component={Support} />

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

          <Route path="/ipad-pro" component={iPadPro} />
          <Route path="/ipad-9.7" component={iPad} />
          <Route path="/ipad-mini-4" component={iPadMini4} />
          <Route path="/ipad-accessories" component={iPadAccessories} />
          <Route path="/ipad-compare" component={iPadCompare} />
          <Route path="/iOS-11" component={iOS11} />

          <Route path="/iphone-x" component={iPhoneX} />
          <Route path="/iphone-8" component={iPhone8} />
          <Route path="/iphone-7" component={iPhone7} />
          <Route path="/iphone-6s" component={iPhone6s} />
          <Route path="/iphone-se" component={iPhoneSE} />
          <Route path="/iphone-ios" component={iPhoneiOS} />
          <Route path="/iphone-accessories" component={iPhoneAccessories} />
          <Route path="/iphone-compare" component={iPhoneCompare} />



        </Switch>
      </div>
    );
  }
}

export default App;
