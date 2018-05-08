import React from 'react';
import './SubMenu.css';

const SubMenu = (props) => {
  return (
    <div className="sub-menu">
      {props.match.params.id}
    </div>
  );
}

export default SubMenu;
