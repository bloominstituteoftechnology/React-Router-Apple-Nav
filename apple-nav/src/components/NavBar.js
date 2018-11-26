// Importing libraries
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({data}) => {
  return (
    <div className="navbar">
      {
        data.map(link => <Link key={link.id} to={`/${link.name.toLowerCase()}`}>{link.name}</Link>)
      }
    </div>
  );
}
 
export default NavBar;