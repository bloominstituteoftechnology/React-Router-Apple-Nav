import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import TopNav from './components/TopNav'
import Data from './Data'
import Support from './components/Support'
import Home from './components/Home'
import Mac from './Products/Mac'
import IPad from './Products/IPad'
import IPhone from './Products/IPhone'
import Watch from './Products/Watch'
import TV from './Products/TV'
import Music from './Products/Music'

class App extends Component {

  render() {
    return (
      <div className="App">
        <TopNav />
        
        <Route exact path="/" render={props => <Home {...props}/> } />
        <Route path="/mac" render={props => <Mac {...props} data={Data.macData}/> } />
        <Route path="/ipad" render={props => <IPad {...props} data={Data.ipadData}/> } />
        <Route path="/iphone" render={props => <IPhone {...props} data={Data.iphoneData}/> } />
        <Route path="/watch" render={props => <Watch {...props} data={Data.watchData}/> } />
        <Route path="/tv" render={props => <TV {...props} data={Data.tvData}/> } />
        <Route path="/music" render={props => <Music {...props} data={Data.musicData}/> } />
        <Route path="/support" render={props => <Support {...props}/> } />
       
        </div>
    );
  }
}

export default App;
