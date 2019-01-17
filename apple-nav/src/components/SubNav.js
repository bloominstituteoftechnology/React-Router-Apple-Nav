import React from 'react';
import { subCategories } from '../data';

const SubNav = (props) => {
  const category = props.match.params.category;
  const subElements = subCategories.find(cat => cat.category === category).sub;
  return ( 
    <div className="subNav">
      {subElements.map(sub => <div key={sub}>{sub}</div>)}
    </div>
   );
}
 
export default SubNav;