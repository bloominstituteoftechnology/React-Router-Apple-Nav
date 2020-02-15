import React from 'react';

import styled from 'styled-components';

import { NavLink, Route } from 'react-router-dom';

const Container = styled.div`
    margin: 0 auto;
    width: 800px;
    background: #333333;

`

const Nav = styled.nav`

    a {
        text-decoration: none;
        color: #E5E5E5;

    }
`

const SubNavBar = () => {
  return (
    <Container>
        <Nav>
            <NavLink to="/">MacBook</NavLink>
            <NavLink to="/">MacBook Air</NavLink>
            <NavLink to="/">MacBook Pro</NavLink>
            <NavLink to="/">iMac</NavLink>
            <NavLink to="/">iMac Pro</NavLink>
            <NavLink to="/">Mac Pro</NavLink>
            <NavLink to="/">Mac mini</NavLink>
            <NavLink to="/">Accessories</NavLink>
            <NavLink to="/">High Sierra</NavLink>
            <NavLink to="/">Compare</NavLink>
        </Nav>
    </Container>
  );
}

export default SubNavBar;
