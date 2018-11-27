// Importing libraries
import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = ({ link }) => {
  return (
    <div className="subnav">
      {
        link.sublinks.map(sub => (
          <Link key={sub.id} to={`/${link.name.toLowerCase()}/${sub.name.toLowerCase()}`} >
            <img src={sub.img} alt={sub.name}/>
            <p>{sub.name}</p>
          </Link>))
      }
    </div>
  );
}
 
export default SubNav;