import React from "react";
import {Link} from 'react-router-dom';

import "../App.css";

import Nav from './Nav'
import SubNav from './SubNav'

const NavWrapper = () => {
  return (
    <div className="margin-fix">
      <Nav />
      <SubNav />

    </div>
  );
};

export default NavWrapper;
