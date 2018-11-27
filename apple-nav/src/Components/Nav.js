import React, { Component } from 'react';


const Nav = (props) => {
 return (
      <div className="nav-item">
        <span>{props.title}</span>
      </div>
    );
  
}

export default Nav;