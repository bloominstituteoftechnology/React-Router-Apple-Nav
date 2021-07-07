import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function SubNav(props) {
  const subNavLinks = props.link.subLinks;
  return (
    <nav>
    {subNavLinks.map(link => (
      <Link to={`${props.link.url}/${link}`}>
      {link}
      </Link>
    ))}
    </nav>
  )
}

export default SubNav;
