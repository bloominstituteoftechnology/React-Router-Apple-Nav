import React from 'react';
import { NavLink } from 'react-router-dom';

const Submenu = ({ match, items }) => {
  return (
    <div className='Submenu'>
      {items.map((item) => {
        return <NavLink to={`${match.url}/${item.path}`}>{item.title}</NavLink>
      })}
    </div>
  )
}

export default Submenu;