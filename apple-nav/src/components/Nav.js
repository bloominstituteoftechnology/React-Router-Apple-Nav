import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  padding: 14px;
  transition: all 0.2s ease-in;
  color: white;
  text-decoration: none;

  &:hover,
  i:hover {
    cursor: pointer;
    color: #b7b7b7;
  }
`;

const Icon = styled.i`
  color: #f6f6f6;
  font-size: 16px;

  &:hover {
    cursor: pointer;
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
  }
`;

export default function Nav(props) {
  return (
    <NavigationWrapper>
      <div>
        <StyledLink to="/" activeClassName="nav-active" className="nav-link">
          <Icon className="fab fa-apple" />
        </StyledLink>
        {props.names.map((name, i) => (
          <StyledLink to={`/${name.name}`} key={name.name + i}>
            {name.name}
          </StyledLink>
        ))}
        <StyledLink to="/">Support</StyledLink>
        <StyledLink to="/" activeClassName="nav-active" className="nav-link">
          <Icon className="fas fa-search" />
        </StyledLink>
        <StyledLink to="/" activeClassName="nav-active" className="nav-link">
          <Icon className="fas fa-shopping-bag" />
        </StyledLink>
      </div>
    </NavigationWrapper>
  );
}

/*{" "}
      <StyledLink to="/" activeClassName="nav-active" className="nav-link">
        <Icon className="fab fa-apple" />
      </StyledLink>
      {props.names.map(name => (
        <div key={name.name}>{name.name}</div>
      ))}
      <StyledLink to="/" activeClassName="nav-active" className="nav-link">
        <Icon className="fas fa-search" />
      </StyledLink>
      <StyledLink to="/" activeClassName="nav-active" className="nav-link">
        <Icon className="fas fa-shopping-bag" />
      </StyledLink>{" "}
      */
