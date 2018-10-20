import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import applelogo from "./img/apple-Logo.svg";
import applebag from "./img/bag-img.svg";
import PropTypes from "prop-types";
// import SubNav from './SubNav';


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
      <NavLink to="/">
        <img src={applelogo} alt="apple" />
      </NavLink>
      {props.data.map(product => (
        <NavLink
          to={`/${product.name}/`}
          style={{ textDecoration: "none", color: "white" }}
          key={product.id}
        >
          {product.name}

        </NavLink>

      ))}
      <NavLink to="/search">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
          alt="search icon"
        />
      </NavLink>
      <NavLink to='/store'>
        <img src={applebag} alt="store" />
      </NavLink>
    </AppleNav>
  );
};

AppleNav.propTypes = {
  data: PropTypes.array

}

export default Nav;
