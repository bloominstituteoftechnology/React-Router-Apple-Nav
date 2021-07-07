import React from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

function Iphone({ match }) {
  const items = [
    { path: 'iphone-x', title: 'iPhone X' },
    { path: 'iphone-8', title: 'iPhone 8' },
    { path: 'iphone-7', title: 'iPhone 7' },
    { path: 'iphone-6', title: 'iPhone 6' },
    { path: 'iphone-se', title: 'iPhone SE' },
    { path: 'ios', title: 'iOS 11' },
    { path: 'accessories', title: 'Accessories' },
    { path: 'compare', title: 'Compare' }
  ]

  return <Submenu match={match} items={items} />
}

export default Iphone;