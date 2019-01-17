import React from 'react';
import { categories } from '../data';
import { Link } from 'react-router-dom';

const Nav = () => {
  return ( 
    <div className="navWrapper">
      <Link to="/"><i class="fab fa-apple"></i></Link>
      {categories.map(category => (
        <Link to={`/${category}`} key={category}>
          {category}
        </Link>
      ))}
      <div>Support</div>
      <div><i class="fas fa-search"></i></div>
      <div><i class="fas fa-shopping-bag"></i></div>
    </div>
   );
}
 
export default Nav;