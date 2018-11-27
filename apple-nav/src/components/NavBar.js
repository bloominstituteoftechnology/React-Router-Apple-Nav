import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Nav from './Nav';
import NavSub from './NavSub';

import './NavBar.scss';

export default function NavBar({data}) {

  return (

    <div className='nav-bar'>

      {data.map(navItem => (
        <>
          <Nav data={navItem} />
          <Route
            path={`/${navItem.name}`}
            render={(props) => <NavSub {...props} parentName={navItem.name} data={navItem.subLinks} />}
          />
        </>))}

    </div>

  );

}
