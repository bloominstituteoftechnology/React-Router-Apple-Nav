import React from 'react';

// components
import TopNav from './topnav/TopNav';
import TopNavSub from './topnav/TopNavSub';

const NavWrapper = props => {
  return (
    <nav>
      <TopNav />
      <TopNavSub />
    </nav>
  );
}

export default NavWrapper;