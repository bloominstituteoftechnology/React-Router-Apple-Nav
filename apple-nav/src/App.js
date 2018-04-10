import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import Home from './components/Home/Home';
import IPad from './components/iPad/iPad';
import IPhone from './components/iPhone/iPhone';
import Mac from './components/Mac/Mac';
import Music from './components/Music/Music';
import Search from './components/search/search';
import Support from './components/Support/Support';
import Shop from './components/shop/shop';
import TV from './components/TV/TV';
import Watch from './components/Watch/Watch';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavWrapper />
        {/* <Nav />       */}
        {/* <SubNav /> */}
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        <Route  path="/iPad" component={IPad} />
        <Route  path="/iPhone" component={IPhone} />
        <Route  path="/Watch" component={Watch} />
        <Route  path="/TV" component={TV} />
        <Route  path="/Mac" component={Mac} />
        <Route  path="/Music" component={Music} />
        <Route  path="/Support" component={Support} />
        <Route  path="/search" component={Search} />
        <Route  path="/shop" component={Shop} />




        {/* <IPad /> */}
        {/* <IPhone /> */}
        {/* <Mac /> */}
        {/* <Music /> */}
        {/* <Search /> */}
        {/* <Support /> */}
        {/* <TV /> */}
        {/* <Watch /> */}
      </div>
    );
  }
}

export default App;
