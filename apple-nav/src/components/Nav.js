import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  /* padding: 14px; */
  transition: all 0.2s ease-in;
  color: white;
  text-decoration: none;

  &:hover,
  i:hover {
    cursor: pointer;
    color: #b7b7b7;
  }

  &.active {
    color: #b7b7b7;
  }
`;

const NavigationWrapper = styled.div`
  color: #f6f6f6;
  background: #333333;

  & > div {
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
  }
`;

export default function Nav(props) {
  return (
    <NavigationWrapper>
      <div>
        <StyledLink to="/" activeClassName="nav-active" className="nav-link">
          <img
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
            alt="apple logo"
          />
        </StyledLink>
        {props.names.map((name, i) => (
          <StyledLink to={`/${name.name}`} key={name.name + i}>
            {name.name}
          </StyledLink>
        ))}
        <StyledLink to="/">Support</StyledLink>
        <StyledLink to="/" activeClassName="nav-active" className="nav-link">
          <img
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
            alt="search icon"
          />
        </StyledLink>
        <StyledLink to="/" activeClassName="nav-active" className="nav-link">
          <img
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
            alt="shopping bag"
          />
        </StyledLink>
      </div>
    </NavigationWrapper>
  );
}
