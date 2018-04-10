import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./NavWrapper.css";
import Nav from "./Nav";
import navData from "./NavData";

const topLevel = [
  { id: 0, name: "Mac" },
  { id: 1, name: "iPad" },
  { id: 2, name: "iPhone" },
  { id: 3, name: "Watch" },
  { id: 4, name: "TV" },
  { id: 5, name: "Music" },
  { id: 6, name: "Support" }
];

const data = navData;

class NavWrapper extends Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
          {navData.map(x => {
            return (
              <NavLink
                key={x.id}
                to={`/${x.name}`}
                className="headerItem"
                activeClassName="activeHeaderItem"
              >
                {x.name}
              </NavLink>
            );
          })}
        </div>
        {navData.map(x => (
          <Route path={`/${x.name}`} render={() => <Nav {...x} />} />
        ))}
        {navData.map(x =>
          x.sub.map(y => {
            return (
              <Route path={`/${y.name.replace(/ /g, "")}`} render={() =>
                <div className="content">{`This is the content page for ${y.name}`}</div>
              }/>
            );
          })
        )}
      </div>
    );
  }
}

export default NavWrapper;
