import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import NavWrapper from './components/NavWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/nav' component={NavWrapper} />
      </div>
    );
  }
}

function clickHandler(url) {
  props.history.push(url);
}

function Home() {
  return (
    <div className='home-page'>
      <h1>Apple Store</h1>
      <button
        onClick={ () =>
          clickHandler('/nav')}>
        Enter
      </button>
    </div>
  )
}

export default App;
