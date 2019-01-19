import React from 'react';
import posed from "react-pose";

import { subCategories } from '../data';

const Item = posed.div({
  enter: { x: 0, opacity: 1, transition: { ease: 'easeOut', duration: 400 } },
  exit: { x: 500, opacity: 0 }
});

const SubNav = (props) => {
  const category = props.match.params.category;
  const subElements = subCategories.find(cat => cat.category === category).sub;
  return ( 
    <Item>
    <div className="subNav">
        {subElements.map(sub => <div key={sub}>{sub}</div>)}
    </div>
    </Item>
   );
}
 
export default SubNav;