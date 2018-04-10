import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
       <div className="NavBar">
        <Link to='/'>Home</Link>
        <ul>
          <li>
            <Link to='/mac'>Mac</Link>
          </li>
          <li>
            <Link to='/ipad'>Ipad</Link>
          </li>
          <li>
            <Link to='/iphone'>Iphone</Link>
          </li>
          <li>
            <Link to='/watch'>Watch</Link>
          </li>
          <li>
            <Link to='/tv'>Tv</Link>
          </li>
          <li>
            <Link to='/music'>Music</Link>
          </li>
          <li>
            <Link to='/support'>Support</Link>
          </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
        </ul>
    </div>
  );
};

export default Navigation;