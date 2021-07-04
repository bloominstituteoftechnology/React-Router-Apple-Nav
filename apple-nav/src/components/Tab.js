import React from 'react';
import { NavLink } from 'react-router-dom';

const Tab = (props) => {
  return (
    <NavLink activeClassName='selected-tab' to={`/${props.id}`}>{props.link}</NavLink>
  )
}

export default Tab;
