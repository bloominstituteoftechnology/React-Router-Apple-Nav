import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { StyledNavLink, NavContainer, ListItems } from './styles';

const AnimationWrapper = styled.div`
  transition-duration: 0.3s;
  transition-property: ${props => (props.state === 'entered' ? 'all' : 'none')};
  transform: ${props => {
    switch (props.state) {
      case 'entering':
        return 'translateX(30px)';
      case 'entered':
        return 'translate(0)';
    }
  }};
  opacity: ${props => {
    switch (props.state) {
      case 'entering':
        return 0;
      case 'entered':
        return 1;
    }
  }};
`;

const Nav = ({ links, state }) => {
  return (
    <AnimationWrapper state={state}>
      <NavContainer>
        {links.map(link => (
          <ListItems key={link.text}>
            <StyledNavLink to={`/${link.href}`}>{link.text}</StyledNavLink>
          </ListItems>
        ))}
      </NavContainer>
    </AnimationWrapper>
  );
};

Nav.propTypes = {
  links: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Nav;
