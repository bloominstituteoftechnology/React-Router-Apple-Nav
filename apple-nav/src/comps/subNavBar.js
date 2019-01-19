import React from 'react';
import {SubTab} from './subTab.js';
import './subNavBar.scss';

const SubNavBar = props => {
  return (
    <div className="subNavBar">
      {props.data.map(mainTab => {
        return (
          <SubTab
            {...props}
            name={mainTab.name}
            products={mainTab}
            key={`${mainTab.name}, subTab`}
          />
        );
      })}
    </div>
  );
};

export default SubNavBar;
