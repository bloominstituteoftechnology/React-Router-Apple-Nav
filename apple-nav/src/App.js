import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Home from './components/Home';
import Mac from './components/Mac/Mac';
import iPad from './components/iPad/iPad';
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
      </div>
    );
  }
}

export default App;
