import React, { Component } from 'react';
import Header from './components/HeaderWrapper'
import HeaderSlide from './components/HeaderSlideOut'
import './App.css';
import { Route } from 'react-router-dom'
import home from './components/home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iPhone: [
        { iPhoneX: './icons/iphone/icon5.svg' },
        { iPhone8: './icons/iphone/icon3.svg' },
        { iPhone7: './icons/iphone/icon3.svg' },
        { iPhone6: './icons/iphone/icon3.svg' },
        { iPhoneSE: './icons/iphone/icon4.svg' },
        { iOS11: './icons/iphone/icon2.svg' },
        { Accessories: './icons/iphone/icon0.svg' },
        { Compare: './icons/iphone/icon1.svg' }
      ],
      Mac: [
        { MacBook: './icons/mac/icon5.svg' },
        { MacBookAir: './icons/mac/icon6.svg' },
        { MacBookPro: './icons/mac/icon4.svg' },
        { iMac: './icons/mac/icon0.svg' },
        { iMacPro: './icons/mac/icon0.svg' },
        { MacPro: './icons/mac/icon8.svg' },
        { MacMini: './icons/mac/icon7.svg' },
        { Accessories: './icons/mac/icon1.svg' },
        { HighSierra: './icons/mac/icon3.svg' },
        { Compare: './icons/mac/icon2.svg' }
      ],
      iPad: [
        { iPadPro: './icons/ipad/icon5.svg' },
        { iPad: './icons/ipad/icon3.svg' },
        { iPadmini4: './icons/ipad/icon4.svg' },
        { iOS11: './icons/ipad/icon2.svg' },
        { Accesories: './icons/ipad/icon0.svg' },
        { Compare: './icons/ipad/icon1.svg' },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        <Route path="/mac" render={(props) => <HeaderSlide {...props} props={this.state.Mac} />} />
        <Route path="/iphone" render={(props) => <HeaderSlide {...props} props={this.state.iPhone} />} />
        <Route path="/ipad" render={(props) => <HeaderSlide {...props} props={this.state.iPad} />} />
        <Route path="/" component={home} />
      </div>

    );
  }
}

export default App;
