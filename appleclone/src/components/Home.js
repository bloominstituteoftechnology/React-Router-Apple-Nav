import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../styles/nav.css'
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div className = "home">
        <p>home</p>
      </div>
    )
  }
}

export default Home;
