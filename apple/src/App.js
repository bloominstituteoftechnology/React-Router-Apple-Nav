import React, { Component } from 'react';
import './App.css';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='Navbar'>
        <Link to={'/'} className='Link'>
          <Glyphicon 
            glyph = 'apple'
          />
        </Link>
        <li>
          <Link to={'/mac'} className='Link'>
             Mac
          </Link>
        </li>
        <li>
          <Link to={'/ipad'} className='Link'>
            ipad
          </Link>
        </li>
        <li>
          <Link to={'/iphone'} className='Link'>
          iphone
          </Link>
        </li>
        <li>
          <Link to={'/Watch'} className='Link'>
          Watch
          </Link>
        </li>
        <li>
          <Link to={'/TV'} className='Link'>
          TV
          </Link>
        </li>
        <li>
          <Link to={'/Music'} className='Link'>
          Music
          </Link>
        </li>
        <li>
          <Link to={'/Support'} className='Link'>
          Support
          </Link>
        </li>
        <Glyphicon 
        glyph = 'search'
        />
      </div>
    )
  }
}

export default App;
