import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const ANav = styled.div`
  display: flex;
  align-items: center;
  color: #efefef;
  heigh: 48%;
  padding: 10px;
  width: 100%;
  text-decoration: none;

  background: ${props => props.theme.bg};
`;

const NavWrapper = styled.div`
  margin: 0 auto;
  .subNav {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.fg};
  }
`;

const TextSpan = styled.span`
  text-align: center;
  margin-top: 7px;
`;

const theme = {
  bg: "#141414",
  fg: "white"
};

const invertTheme = {
  bg: "#f6f6f6",
  fg: "black"
};

const SubNav = ({ mac, bgcolor }) => {
  return (
    <>
    <ThemeProvider theme={bgcolor ? invertTheme : theme}>
      <ANav>
        {mac.map(product => (
          <NavWrapper>
            <NavLink to="/" className="subNav" key={product.id}>
              <img src={product.img} alt={product.name} />
              <TextSpan>{product.name}</TextSpan>
            </NavLink>
          </NavWrapper>
        ))}
      </ANav>
    </ThemeProvider>

      </>
  );
};

export default SubNav;
