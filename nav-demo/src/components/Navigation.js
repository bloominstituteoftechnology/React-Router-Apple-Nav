import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="mid">
      <Link to="/" className="categories">apple</Link>
      <Link to="/mac" className="categories">Mac</Link>
      <Link to="/ipad" className="categories">iPad</Link>
      <Link to="/iphone" className="categories">iPhone</Link>
      <Link to="/watch" className="categories">Watch</Link>
      <Link to="/tv" className="categories">TV</Link>
      <Link to="/music" className="categories">Music</Link>
    </div>
  );
}

export default Navigation;