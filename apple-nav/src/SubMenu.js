import React from 'react';
import './SubMenu.css';
import { NavLink } from 'react-router-dom';


const SubMenu = (props) => {
  let subCat = props.menuData[props.match.params.id];
  return (
    <div className="sub-menu">
      {subCat.items.map((item, index) => {
        return (
          <div className="sub-menu-item" key={index}>
            <NavLink to={`/categories/${props.match.params.id}/content/${index}`} activeClassName="sub-menu-selected" className="sub-menu-link" > {item} </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default SubMenu;
