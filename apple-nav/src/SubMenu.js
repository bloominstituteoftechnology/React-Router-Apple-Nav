import React from 'react';
import './SubMenu.css';
import { NavLink } from 'react-router-dom';


const SubMenu = (props) => {
  let subCat = props.menuData[props.match.params.id];
  return (
    <div className="sub-menu">
      {subCat.items.map((item, index) => {
        return (
          <NavLink to={`/categories/${props.match.params.id}/content/${index}`} key={index} className="sub-menu-item"> {item} </NavLink>
        );
      })}
    </div>
  );
}

export default SubMenu;
