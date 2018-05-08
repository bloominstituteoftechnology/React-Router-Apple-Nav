import React from 'react';
import './TopMenu.css';
import { NavLink } from 'react-router-dom';

const TopMenu = (props) => {
  return (
    <div className="top-menu">
      <img className="guava-logo" src="https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-4/200/377-128.png" alt="guava" />
      {props.menuData.map((datum, index) => {
        return (
          <NavLink className="top-link" activeClassName="selected-link" key={index} to={`/categories/${index}`}>{datum.name}</NavLink>
        );
      })}
    </div>
  );
}

export default TopMenu;
