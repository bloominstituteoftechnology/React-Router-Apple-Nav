import React, { Component } from 'react';
import Nav from './Nav';
import {Link} from "react-router-dom";

const NavWrapper = (props) => {
 return (
      <div className="nav-wrapper">
        {props.linkData.map(link => 
        <Link to={`/products/${link.id}`} key={link.id}>
            <Nav title={link.name}/>
        </Link>
        )}
      </div>
    );
  
}

export default NavWrapper;
