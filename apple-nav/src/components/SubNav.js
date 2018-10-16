import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNav = props => {
  console.log('subNavLink', props.link);
  console.log('subNavLinkthing', typeof props.link);
  console.log('keys', Object.keys(props.link));
  console.log(props.link[0]);
  let link = props.link[0];
  console.log(typeof link);
  console.log(link);
  console.log('sum');
  // let name = props.link[0].name;

    return (
      <div className='sub-nav'>
        <p>SubNav!</p>
      {/* {props.link[0].subLinks.map(subLink => (
        <NavLink
          key={subLink.name}
          to={`${name}/${subLink.name}`}
          activeStyle={{ color: 'red' }}
          onClick={props.deselectLink}>{subLink.name}</NavLink>
      ))} */}
    </div>
    )
}

export default SubNav;
