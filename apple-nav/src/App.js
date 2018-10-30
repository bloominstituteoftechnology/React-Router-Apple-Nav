import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavWrapper from './NavStuff/NavWrapper.js';
import MacBook from './img/mac/macbook.png';
import MacBookPro from './img/mac/macbookpro.png';
import MacBookAir from './img/mac/macbookair.png';
import iMac from './img/mac/imac.png';
import iMacPro from './img/mac/imacpro.png';
import MacPro from './img/mac/macpro.png';
import MacMini from './img/mac/macmini.png';
import MacAccesories from './img/mac/accesories.png';
import Mojave from './img/mac/mojave.png';
import MacCompare from './img/mac/compare.png';

import iPhoneAccesories from './img/iphone/accesories.png';
import Airpods from './img/iphone/airpods.png';
import iPhoneCompare from './img/iphone/compare.png';
import ios12 from './img/iphone/ios12.png';
import iphone7 from './img/iphone/iphone7.png';
import iphone8 from './img/iphone/iphone8.png';
import iphonexr from './img/iphone/iphonexr.png';
import iphonexs from './img/iphone/iphonexs.png';

import WatchAccesories from './img/watch/accesories.png';
import Bands from './img/watch/bands.png';
import WatchCompare from './img/watch/compare.png';
import Watch3 from './img/watch/watch3.png';
import Watch4 from './img/watch/watch4.png';
import WatchHermes from './img/watch/watchhermes.png';
import WatchNike from './img/watch/watchnike+.png';
import WatchOs from './img/watch/watchos.png';


import TvAccesories from './img/tv/accesories.png';
import TvApp from './img/tv/app.png';
import TvCompare from './img/tv/compare.png';
import Tv from './img/tv/tv.png';
import Tv4k from './img/tv/tv4k.png';

import MusicAccesories from './img/music/accesories.png';
import Gift from './img/music/gift.png';
import Homepod from './img/music/homepod.png';
import iPodTouch from './img/music/homepod.png';
import iTunes from './img/music/itunes.png';
import music from './img/music/music.png';









class App extends Component {
  constructor(){
    super();
    this.state={
      productTypes:[
        {name: 'Mac',
         types: [
           {typeName: 'MacBook',
           img: MacBook,
           },
           {typeName: 'MacBook Air',
           img:MacBookAir,
           },
           {typeName: 'MacBook Pro',
           img:MacBookPro,
           },
           {typeName: 'iMac',
           img:iMac,
           },
           {typeName: 'iMac Pro',
           img:iMacPro,
           },
           {typeName: 'Mac Pro ',
           img:iMacPro,
           },
           {typeName: 'Mac Mini',
           img:MacMini,
           },
           {typeName: 'Accesories',
           img:MacAccesories,
           },
           {typeName: 'Mojave',
           img:Mojave,
           },
           {typeName: 'Compare',
           img:MacCompare,
           },
         ]
        },


        {name: 'iPhone',
        types: [
          {typeName: 'iPhone Xs',
          img:iPhoneAccesories
          },
          {typeName: 'iPhone Xr',
          img:Airpods
          },
          {typeName: 'iPhone 8',
          img:iphone8
          },
          {typeName: 'iPhone 7',
          img:iphone7
          },
          {typeName: 'iOS 12',
          img:ios12
          },
          {typeName: 'AirPods',
          img:Airpods
          },
          {typeName: 'Accessories',
          img:iPhoneAccesories
          },
          {typeName: 'Compare',
          img:iPhoneCompare
          },
          
        ]
       },

      {name: 'Watch',
      types: [
        {typeName: 'Apple Watch Series 4',
        img:Watch4
        },
        {typeName: 'Apple Watch Nike+',
        img:WatchNike
        },
        {typeName: 'Apple Watch Hermes',
        img:WatchHermes
        },
        {typeName: 'Apple Watch Series 3',
        img:Watch3
        },
        {typeName: 'Watch OS',
        img:WatchOs
        },
        {typeName: 'Bands',
        img:Bands
        },
        {typeName: 'Accessories',
        img:WatchAccesories
        },
        {typeName: 'Compare',
        img:WatchCompare
        },
        
      ]
     },

     {name: 'TV',
     types: [
       {typeName: 'Apple TV 4K',
       img:Tv4k
       },
       {typeName: 'Apple TV',
       img:Tv
       },
       {typeName: 'TV App',
       img:TvApp
       },
       {typeName: 'Accessories',
       img:TvAccesories
       },
       {typeName: 'Compare',
       img:TvCompare
       },
       
     ]
    },

    {name: 'Music',
    types: [
      {typeName: 'Apple Music',
      img:music
      },
      {typeName: 'iTunes',
      img:iTunes
      },
      {typeName: 'HomePod',
      img:Homepod
      },
      {typeName: 'AirPods',
      img:Airpods
      },
      {typeName: 'iPod touch',
      img:iPodTouch
      },
      {typeName: 'Music Accessories',
      img:MusicAccesories
      },
      {typeName: 'Gift Cards',
      img:Gift
      },
      
    ]
   },
      ]
    }


  }

  render() {
    return (
      <div>
      <NavWrapper MacBook={MacBook}>

      </NavWrapper>

      </div>
    );
  }
}

export default App;
