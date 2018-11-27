import React, { Component } from 'react';


const NavWrapper = (props) => {
 return (
      <div className="nav-wrapper">
        {props.linkData.map(link => <div>{link.name}</div>)}
      </div>
    );
  
}

export default NavWrapper;
