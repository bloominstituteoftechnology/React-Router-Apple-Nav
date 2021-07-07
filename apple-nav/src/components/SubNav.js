import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SubItemPage from './SubItemPage';

const SubNav = props => {
const { match } = props
let linkName = props.match.params.name;
let dark = (linkName === 'Mac' || linkName === 'TV');
let classes = 'sub-nav ';
if (!dark) {
  classes += 'light'
}
    return (
    <div className={classes}>
    {props.link.map(linkObj => (
      linkObj.subLinks.map(subLink => (
        <NavLink
          key={subLink.name}
          to={`${match.url}/${subLink.name}`}
          activeStyle={{ color: 'red'}}
          onClick={props.deselectLink}>
          <img src={subLink.img} alt={subLink.name} />
          <p>{subLink.name}</p>
        </NavLink>
      ))
    ))}
  </div>
    )
}

export default SubNav;
