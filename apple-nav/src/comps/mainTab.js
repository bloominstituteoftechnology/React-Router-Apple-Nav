import React from 'react';
import {Link} from 'react-router-dom';

const MainTab = props => {
  return (
    <Link to={props.tab}>
      <div>{props.tab}</div>
    </Link>
  );
};

export default MainTab;
