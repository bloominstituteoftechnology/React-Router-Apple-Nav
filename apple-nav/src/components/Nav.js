import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navContainer">
          {this.props.sub.map(x => {
            return (
              <NavLink to={`/${x.name.replace(/ /g, "")}`}>{x.name}</NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Nav;
