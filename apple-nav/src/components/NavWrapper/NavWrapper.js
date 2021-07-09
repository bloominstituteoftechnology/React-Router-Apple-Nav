import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import SubNav from '../SubNav/SubNav';
import navData from '../../nav-data';
import styled from 'styled-components';

const NavWrapperDivElement = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: 375px;
`;

export default class NavWrapper extends Component {
  render() {
    return (
      <NavWrapperDivElement>
        <Route path="/" component={Nav} />
        <Route path="/product/:productId" component={SubNav} />
      </NavWrapperDivElement>
    );
  }
}
