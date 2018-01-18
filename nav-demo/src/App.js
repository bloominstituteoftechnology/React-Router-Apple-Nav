import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MacNav from './components/MacNav';
import IpadNav from './components/IpadNav';
import IphoneNav from './components/IphoneNav';
import WatchNav from './components/WatchNav';
import TvNav from './components/TvNav';
import MusicNav from './components/MusicNav';

function Home(props) {
  return <h2>Home page content...</h2>
}

function Mac(props) {
  return <MacNav path={props.match.path} />;
}

function Ipad(props) {
  return <IpadNav path={props.match.path} />;
}

function Iphone(props) {
  return <IphoneNav path={props.match.path} />;
}

function Watch(props) {
  return <WatchNav path={props.match.path} />;
}

function Tv(props) {
  return <TvNav path={props.match.path} />;
}

function Music(props) {
  return <MusicNav path={props.match.path} />;
}

function MacBook(props) {
  return <h2>MacBook content...</h2>;
}

function MacBookAir(props) {
  return <h2>MacBook Air content...</h2>;
}

function MacBookPro(props) {
  return <h2>MacBook Pro content...</h2>;
}

function Imac(props) {
  return <h2>iMac content...</h2>;
}

function ImacPro(props) {
  return <h2>iMac Pro content...</h2>;
}

function MacPro(props) {
  return <h2>Mac Pro content...</h2>;
}

function MacMini(props) {
  return <h2>Mac Mini content...</h2>;
}

function MacAccessories(props) {
  return <h2>Mac Accessories content...</h2>;
}

function MacHighSierra(props) {
  return <h2>Mac High Sierra content...</h2>;
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navigation />
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/mac" component={Mac} />
        <Route path="/ipad" component={Ipad} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={Tv} />
        <Route path="/music" component={Music} />

        <Route path="/mac/macbook" component={MacBook} />
        <Route path="/mac/macbook-air" component={MacBookAir} />
        <Route path="/mac/macbook-pro" component={MacBookPro} />
        <Route path="/mac/imac" component={Imac} />
        <Route path="/mac/imac-pro" component={ImacPro} />
        <Route path="/mac/mac-pro" component={MacPro} />
        <Route path="/mac/mac-mini" component={MacMini} />
        <Route path="/mac/accessories" component={MacAccessories} />
        <Route path="/mac/high-sierra" component={MacHighSierra} />
        
      </div>
    );
  }
}

export default App;
