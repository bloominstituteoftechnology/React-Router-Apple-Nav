import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NavLink = props => {
  return (
    <div>
      <Link to={`${props.link.name}`} key={Math.random()}>
        {props.link.name}
      </Link>
    </div>
  );
}

export default NavLink;
