import React, { Component } from 'react';
import styled from 'styled-components';

const NavUlElement = styled.ul`
  display: flex;
  position: relative;
  background-color: #333;
  font-size: 1.7rem;
  padding: 10px;
`;

export default class Nav extends Component {
  render() {
    return (
      <NavUlElement>
      </NavUlElement>
    );
  }
}
