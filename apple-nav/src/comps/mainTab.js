import React from 'react';
import {Link} from 'react-router-dom';
import './mainTab.scss';

const MainTab = props => {
  return (
    <Link to={props.tab} className="mainTab">
      <div>{props.tab}</div>
    </Link>
  );
};

export default MainTab;
