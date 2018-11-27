// Importing libraries
import React from 'react';

const SubNav = ({link}) => {
  return (
    <div className="subnav">
      {
        link.sublinks.map(sub => <a key={sub.id} href="/">{sub.name}</a>)
      }
    </div>
  );
}
 
export default SubNav;