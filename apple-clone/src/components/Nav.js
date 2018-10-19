import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import applelogo from "../images/apple-Logo.svg";
import applebag from "../images/bag-img.svg";
import PropTypes from "prop-types";


const AppleNav = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  padding: 0 300px;
  font-size: 17px;
  text-decoration: none;
  text-decoration: none;
  color: white;
  margin: 0 auto;
`;

const Nav = props => {
  return (
    <AppleNav>
      <img src={applelogo} alt="apple" />
      {props.data.map(product => (
        <NavLink
          to={`/${product.id}/`}
          style={{ textDecoration: "none", color: "white" }}
          key={product.id}
        >
          {product.name}
        
        </NavLink>
        
      ))}
      <img src={applebag} alt="apple" />
    </AppleNav>
  );
};

AppleNav.propTypes = {
  data: PropTypes.array

}

export default Nav;
