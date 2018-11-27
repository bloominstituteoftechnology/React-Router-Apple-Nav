import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationWrapper = styled.div`
  color: #f6f6f6;
  background: #333333;

  & > div {
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    margin: 0 auto;

    & > a {
      padding: 14px;
      transition: all 0.2s ease-in;
      color: white;
      text-decoration: none;
    }

    & > a:hover,
    & > a > i:hover {
      cursor: pointer;
      color: #b7b7b7;
    }
  }
`;

const Icon = styled.i`
  color: #f6f6f6;'
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: #b7b7b7;
`;

export default class NavWrapper extends Component {
  render() {
    return (
      <NavigationWrapper>
        <div>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            <Icon className="fab fa-apple" />
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            Mac
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            iPad
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            iPhone
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            Watch
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            TV
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            Music
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            Support
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            <Icon className="fas fa-search" />
          </NavLink>
          <NavLink to="/" activeClassName="nav-active" className="nav-link">
            <Icon className="fas fa-shopping-bag" />
          </NavLink>
        </div>
      </NavigationWrapper>
    );
  }
}
