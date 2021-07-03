import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Mac from './components/Mac';
import iPad from './components/iPad';
import iPhone from './components/iPhone';
import Watch from './components/Watch';
import TV from './components/TV';
import Music from './components/Music';
import Support from './components/Support';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      forMac: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Acessories', 'High Sierra', 'Compare'],
      foriPad: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Acessories', 'Compare'],
      foriPhone: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Acessories', 'Compare'],
      forWatch: ['Apple Watch Series 3', 'Apple Watch Nike+', 'Apple Watch Hermes', 'Appe Watch Edition', 'Apple Watch Series 1', 'watchOS', 'Bands', 'Acessories', 'Compare'],
      forTV: ['Apple TV 4K', 'Apple TV', 'TV App', 'Acessories', 'Compare'],
      forMusic: ['Apple Music', 'iTunes', 'HomePod', 'iPod Touch', 'Music Acessories', 'Gift Cards'],
    }
  }

  render() {
    return (
      <div>
      <div className="App-top">
        <Link to="/">Home</Link>
        <Link to="/Mac">Mac</Link>
        <Link to="/iPad">iPad</Link>
        <Link to="/iPhone">iPhone</Link>
        <Link to="/Watch">Watch</Link>
        <Link to="/TV">TV</Link>
        <Link to="/Music">Music</Link>
        <Link to="/Support">Support</Link>
      </div>
      <div className="App-bottom">  
        {/* <Route path="/Mac" render={(props) => <Mac {...props} mac={this.state.forMac}> } /> */}
        <Route exact path="/" component={Home} />
        <Route path="/Mac" component={Mac} />
        <Route path="/iPad" component={iPad} />
        <Route path="/iPhone" component={iPhone} />
        <Route path="/Watch" component={Watch} />
        <Route path="/TV" component={TV} />
        <Route path="/Music" component={Music} />
        <Route path="/Support" component={Support} />
      </div>
      </div>
    );
  }
}

export default App;
