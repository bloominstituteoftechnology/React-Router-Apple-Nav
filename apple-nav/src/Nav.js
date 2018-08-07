import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { StyledNavLink, NavContainer, ListItems } from './styles';

const Nav = ({ links }) => {
  return (
    <NavContainer>
      {links.map(link => (
        <ListItems key={link.text}>
          <StyledNavLink to={`/${link.href}`}>{link.text}</StyledNavLink>
        </ListItems>
      ))}
    </NavContainer>
  );
};

Nav.propTypes = {
  links: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Nav;
