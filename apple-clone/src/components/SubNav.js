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
     font-size:14px;
  }
  .New {
    font-size: 10px;
    color: orangered;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.fg};
  }
`;

const TextSpan = styled.span`
  text-align: center;

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
          <NavWrapper key={product.id + product.name}>
            <NavLink to="/" className="subNav" key={product.id}>
              <img src={product.img} alt={product.name} />
                <TextSpan>{product.name}</TextSpan>
                <TextSpan
                  className="New"
                  style={!product.new ? { visibility: 'hidden' } : null}
                >
                  New
            </TextSpan>
            </NavLink>
          </NavWrapper>
        ))}
      </ANav>
    </ThemeProvider>

      </>
  );
};

export default SubNav;
