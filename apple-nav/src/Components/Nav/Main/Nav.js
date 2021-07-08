import React from 'react';
import {Link, Route} from 'react-router-dom';
import SubNav from '../Sub/SubNav'
import './Nav.css';
const Nav = () => {
  return (
    <header className="App-header">
      <div className='navContainer'>
        <Link className='navItem font-25' to='/'><i className="fab fa-apple"></i></Link>
        <Link className='navItem' to='/pages/mac'>Mac</Link>
        <Link className='navItem' to='/pages/ipad'>iPad</Link>
        <Link className='navItem' to='/pages/iphone'>iPhone</Link>
        <Link className='navItem' to='/pages/watch'>Watch</Link>
        <Link className='navItem' to='/pages/tv'>TV</Link>
        <Link className='navItem' to='/pages/music'>Music</Link>
        <Link className='navItem' to='/pages/support'>Support</Link>
        <Link className='navItem' to='/'><i className="fas fa-search"></i></Link>
        <Link className='navItem' to='/'><i className="fas fa-clipboard"></i></Link>
      </div>
      <Route path='/pages/:name' render={(props) => <SubNav {...props}/>}/>
    </header>
  );
}

export default Nav;
