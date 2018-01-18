import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MacNav from './components/Mac';
import IpadNav from './components/Ipad';
import IphoneNav from './components/Iphone';
import WatchNav from './components/Watch';
import TvNav from './components/Tv';
import MusicNav from './components/Music';

function Home(props) {
  return <h2>Home</h2>
}

function Mac(props) {
  return <MacNav />;
}

function Ipad(props) {
  return <IpadNav />;
}

function Iphone(props) {
  return <IphoneNav />;
}

function Watch(props) {
  return <WatchNav />;
}

function Tv(props) {
  return <TvNav />;
}

function Music(props) {
  return <MusicNav />;
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
      </div>
    );
  }
}

export default App;
