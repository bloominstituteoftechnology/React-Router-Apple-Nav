import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import { Logo, Search, Shop } from "./assets";

const HeaderContainer = styled.div`
  width: 100%;
  height: 44px;
  background: #323232;
`;
const NavBar = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.div`
  color: white;
  &:hover {
    color: #585858;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderContainer>
        <NavBar>
          <NavItem>
            <Logo />
          </NavItem>
          {this.props.data.map(navItem => (
            <NavItem key={navItem.id}>{navItem.name}</NavItem>
          ))}
          <NavItem>
            <Search />
          </NavItem>
          <NavItem>
            <Shop />
          </NavItem>
        </NavBar>
      </HeaderContainer>
    );
  }
}

export default Header;
