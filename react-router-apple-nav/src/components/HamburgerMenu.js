import React from 'react';

import styled, {keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

import { NavLink, Route } from 'react-router-dom';

const Container = styled.div`
    background: #000000;
    height: 92vh;
    transition: linear 1s;

`

const SearchForm = styled.form`
    border-bottom: 1px solid #6e6e73;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
`
const SearchBar = styled.input`
    background: #1D1D1F;
    color: #6e6e73;
    border: none;
    width: 90%;
    height: 30px;
    border-radius: 10px;  
    padding: 6px 0 6px 30px;  
    font-size: 18px;
`

const NavColumn = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        border-bottom: 1px solid #E5E5E5;
        color: #CCCCCC;
        width: 90%;
        padding: 15px 0;
        font-size: 18px;
    }

    a:last-child {
        border: none;
    }

    .active {
        color: #8E8E8E;
    }
`




const HamburgerMenu = () => {


    return (
        <Container>
            <SearchForm>
                <SearchBar placeholder="Search apple.com" />
            </SearchForm>
            <NavColumn>
                <NavLink to="/Mac">Mac</NavLink>
                <NavLink to="/iPad">iPad</NavLink>
                <NavLink to="/iPhone">iPhone</NavLink>
                <NavLink to="/Watch">Watch</NavLink>
                <NavLink to="/TV">TV</NavLink>
                <NavLink to="/Music">Music</NavLink>
                <NavLink to="/Support">Support</NavLink>
            </NavColumn>
        </Container>
    );
}

export default HamburgerMenu;
