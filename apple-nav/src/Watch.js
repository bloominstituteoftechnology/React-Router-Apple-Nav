import React from 'react';
import { NavLink } from 'react-router-dom';

function Watch({ match }) {
  const items = [
    { path: 'apple-watch-3', title: 'Apple Watch Series 3' },
    { path: 'apple-watch-nike', title: 'Apple Watch Nike+' },
    { path: 'apple-watch-hermes', title: 'Apple Watch Hermes' },
    { path: 'apple-watch-edition', title: 'Apple Watch Edition' },
    { path: 'apple-watches', title: 'Watch OS' },
    { path: 'bands', title: 'Bands' },
    { path: 'accessories', title: 'Accessories' },
    { path: 'compare', title: 'Compare' },
  ]
  return <SubMenu match={match} items={items} />
}
export default Watch;