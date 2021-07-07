import React from 'react';
import { NavLink } from 'react-router-dom';
 
const NavTopTab = (props) => {
  return (
    <NavLink activeClassName='selected-tab' to={`/${props.id}`}>{props.link}</NavLink>
  )
}
 export default NavTopTab;