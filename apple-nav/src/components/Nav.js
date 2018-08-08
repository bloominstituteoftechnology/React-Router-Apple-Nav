import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = (props) => {

    return (
      <div className="category-list">
        {props.categories.map(category => (
          <NavLink to={`/${category.name}/`} activeClassName="activeNavButton" key={category.id}>
          <span>{category.name}</span>
          </NavLink>
        ))}
      </div>
    )
  }

export default Nav;
