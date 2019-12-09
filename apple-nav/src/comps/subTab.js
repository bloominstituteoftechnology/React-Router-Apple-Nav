import React from 'react';
import './subTab.scss';

export const SubTab = props => {
  if (props.name === props.match.params.products) {
    return props.products.subLinks.map(item => {
      return (
        <div className="subTabCont" key={item.name}>
          <img src={item.img} alt={item.name} />
          <div>{item.name}</div>
        </div>
      );
    });
  } else return null;
};
