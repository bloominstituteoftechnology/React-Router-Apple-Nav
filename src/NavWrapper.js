import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainNav = styled.div`
    width: 980px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.2rem 0;
    justify-content: space-between;
    color: #FFF;
    font-size: 1.4rem;
`

export default function NavWrapper() {
    return (
        <Header>
            <MainNav className="mainnav">
                <Link to="/"><i class="fab fa-apple"></i></Link>
                <Link to="/mac">Mac</Link>
                <Link to="/ipad">iPad</Link>
                <Link to="/iphone">iPhone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/support">Support</Link>
                <i class="fas fa-search"></i>
                <i class="fas fa-shopping-bag"></i>
            </MainNav>
        </Header>
        
    );
}