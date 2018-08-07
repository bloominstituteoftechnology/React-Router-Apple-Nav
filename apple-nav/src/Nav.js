import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.4rem;
`;

const Nav = ({ links }) => {
  return (
    <NavContainer>
      {links.map(link => (
        <li key={link}>
          <StyledNavLink to={`/${link}`}>{link}</StyledNavLink>
        </li>
      ))}
    </NavContainer>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Nav;
