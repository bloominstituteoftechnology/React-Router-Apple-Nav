import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import SubNav from './SubNav';

const Nav = props => {
  console.log('nav', props.link)
  let activeLink = props.link;

  return(
    <div className='main-nav'>
    {props.links.map(link => (
      <NavLink
        key={link.name}
        onClick={props.selectLink}
        to={`/${link.name}`}
        activeStyle={{ color: 'teal' }}>{link.name}
      </NavLink>
    ))}
    <Route exact path='/:name' render={(props) => (<SubNav {...props} isActive={props.isActive} link={activeLink} deselectLink={props.deselectLink} />)} />
  </div>
  )
}

export default Nav;
