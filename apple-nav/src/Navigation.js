import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const items = [
    { path: '', title: 'Home' },
    { path: 'mac', title: 'Mac' },
    { path: 'ipad', title: 'iPad' },
    { path: 'iphone', title: 'iPhone' },
    { path: 'watch', title: 'Watch' },
    { path: 'tv', title: 'TV' },
    { path: 'music', title: 'Music' },
    { path: 'support', title: 'Support' },
    { path: 'search', title: 'Search' },
  ]

  return (
    <div className="NavBar">
      {items.map((item) => <NavLink activeClassName="NavBar--active" to={`/${item.path}`}>{item.title}</NavLink>)}
    </div>
  );
};

export default Navigation;