import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';
import MainNav from "./MainNav";
import SubNav from "./SubNav";

class Header extends Component {
    render () {
        return (
          <div className="Header">
            <MainNav />
            <Route path="/:product" component={SubNav} />
          </div>
        );
    }
}

export default Header;