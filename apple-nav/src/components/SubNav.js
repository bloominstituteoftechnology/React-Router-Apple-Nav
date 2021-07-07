import React from 'react';
import { NavLink } from "react-router-dom";

const SubNav = (props) => {
const category = props.categories.find( category => `${category.name}` === props.match.params.categoryName );
   
      return (
        <div className="product-list">
          {category.products.map((product, i) => (
            <NavLink to={`/${category.name}/${product}`} activeClassName="activeNavButton" key={i}>
            <span>{product}</span>
            </NavLink>
          ))}
        </div>
      )
    }
  
  
  export default SubNav;