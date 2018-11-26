import React, { Component } from "react";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: #f6f6f6;
  background: #333333;
  font-size: 14px;
`;

export default class NavWrapper extends Component {
  render() {
    return (
      <NavigationWrapper>
        <p>AL</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>TV</p>
        <p>Music</p>
        <p>Support</p>
        <p>MG</p>
        <p>SB</p>
      </NavigationWrapper>
    );
  }
}
