import React from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from './navigationData';

const TopNav = props => {
  return (
    <React.Fragment>
      <button>[APPLE]</button>
      
      <ul>
        
        {
          navLinks.map(link => {
            return (
              <Link key={ link.content } to={ link.url }>
                <li>{ link.content }</li>
              </Link>
            )
          })
        }
        
      </ul>

      <button>[SEARCH]</button>
      <button>[CHECKOUT]</button>
    </React.Fragment>
  );
};

export default TopNav;