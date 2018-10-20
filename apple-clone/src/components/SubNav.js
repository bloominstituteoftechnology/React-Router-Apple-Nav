import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ANav = styled.div`
  display: flex;
  align-items: center;
  background: #141414;
  color: #efefef;
  heigh: 48%;
  padding: 10px;
  width: 100%;
  text-decoration: none;
`;
const NavWrapper = styled.div`
margin: 0 auto;
  .subNav {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  a {
      color:white;
    text-decoration: none;
  }
`;

const TextSpan = styled.span`
  text-align: center;
  margin-top: 7px;
`;

const SubNav = ({ mac }) => {
  return (
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
  );
};

export default SubNav;
