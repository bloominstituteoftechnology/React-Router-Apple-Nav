import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 910px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
`;

export const NavContainer = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ListItems = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.4rem;

  &.active {
    opacity: 0.7;
  }
`;
