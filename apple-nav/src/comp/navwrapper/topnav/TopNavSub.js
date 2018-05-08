import React from 'react';

import { subNavLinks } from './navigationData';

const TopNavSub = props => {
  const { product } = props.match.params;
  const getProduct = Object.keys(subNavLinks).filter(subNavLinksKey => subNavLinksKey === product);

  return (
    (!subNavLinks[getProduct])
    ?
      null
    :
      <ul>
        {
          subNavLinks[getProduct].map(product => {
            return (
              <li key={product}>{product}</li>
            )
          })
        }
      </ul>
  )     
};

export default TopNavSub;