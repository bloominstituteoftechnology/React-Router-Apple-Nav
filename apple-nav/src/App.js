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
import iPhoneX from './components/iPhone/iPhoneX';
import iPhone8 from './components/iPhone/iPhone8';
import iPhone7 from './components/iPhone/iPhone7';
import iPhone6s from './components/iPhone/iPhone6s';
import iPhoneSE from './components/iPhone/iPhoneSE';
import iPhoneAccessories from './components/iPhone/iPhoneAccessories';
import iPhoneCompare from './components/iPhone/iPhoneCompare';

import Watch from './components/Watch/Watch';
import Edition from './components/Watch/Edition';
import Hermes from './components/Watch/Hermes';
import NikePlus from './components/Watch/NikePlus';
import Series1 from './components/Watch/Series1';
import Series3 from './components/Watch/Series3';
import WatchAccessories from './components/Watch/WatchAccessories';
import WatchBands from './components/Watch/WatchBands';
import WatchCompare from './components/Watch/WatchCompare';
import WatchOS from './components/Watch/WatchOS';

import TV from './components/TV/TV';
import AppleTV from './components/TV/AppleTV';
import TV4K from './components/TV/TV4K';
import TVAccessories from './components/TV/TVAccessories';
import TVApp from './components/TV/TVApp';
import TVCompare from './components/TV/TVCompare';

import Music from './components/Music/Music';
import AppleMusic from './components/Music/AppleMusic';
import HomePod from './components/Music/HomePod';
import iPodTouch from './components/Music/iPodTouch';
import iTunes from './components/Music/iTunes';
import MusicAccessories from './components/Music/MusicAccessories';
import GiftCards from './components/Music/GiftCards';

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

        <Route exact path='/iphone-x' component={iPhoneX} />
        <Route exact path='/iphone-8' component={iPhone8} />
        <Route exact path='/iphone-7' component={iPhone7} />
        <Route exact path='/iphone-6s' component={iPhone6s} />
        <Route exact path='/iphone-se' component={iPhoneSE} />
        <Route exact path='/iphone-accessories' component={iPhoneAccessories} />
        <Route exact path='/iphone-compare' component={iPhoneCompare} />

        <Route exact path='/watch-series-3' component={Series3} />
        <Route exact path='/watch-nike-plus' component={NikePlus} />
        <Route exact path='/watch-hermes' component={Hermes} />
        <Route exact path='/watch-edition' component={Edition} />
        <Route exact path='/watch-series-1' component={Series1} />
        <Route exact path='/watchos' component={WatchOS} />
        <Route exact path='/watch-bands' component={WatchBands} />
        <Route exact path='/watch-accessories' component={WatchAccessories} />
        <Route exact path='/watch-compare' component={WatchCompare} />

        <Route exact path='/apple-tv-4k' component={TV4K} />
        <Route exact path='/apple-tv' component={AppleTV} />
        <Route exact path='/tv-app' component={TVApp} />
        <Route exact path='/tv-accessories' component={TVAccessories} />
        <Route exact path='/tv-compare' component={TVCompare} />

        <Route exact path='/apple-music' component={AppleMusic} />
        <Route exact path='/itunes' component={iTunes} />
        <Route exact path='/homepod' component={HomePod} />
        <Route exact path='/ipod-touch' component={iPodTouch} />
        <Route exact path='/music-accessories' component={MusicAccessories} />
        <Route exact path='/gift-cards' component={GiftCards} />

      </div>
    );
  }
}

export default App;
