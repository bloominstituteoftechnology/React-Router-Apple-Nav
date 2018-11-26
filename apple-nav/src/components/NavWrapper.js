import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    }

    & > a:hover {
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
          <Link to="/">
            <Icon className="fab fa-apple" />
          </Link>
          <a>Mac</a>
          <a>iPad</a>
          <a>iPhone</a>
          <a>Watch</a>
          <a>TV</a>
          <a>Music</a>
          <a>Support</a>
          <Link to="/">
            <Icon className="fas fa-search" />
          </Link>
          <Link to="/">
            <Icon className="fas fa-shopping-bag" />
          </Link>
        </div>
      </NavigationWrapper>
    );
  }
}
