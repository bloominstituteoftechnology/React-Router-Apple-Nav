import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapperDiv = styled.div`
    height: 48px;
    background: #323232;
    color: white;
`;

const NavContent = styled.ul`
    height: 100%;
    padding: 0;
    margin: 0 5%;
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    letter-spaceing: -0.1em;
    font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    &:hover{
        color: darkgray;
        cursor: pointer;
    }
`

const LiApple = styled.li`
    width:20px;
    background-size: 20px 44px;
    background-repeat: no-repeat;
    background-image: url(../iamges/apple.jpeg);
    bacground-position: center center;
`

class NavWrapper extends React.Component {
    constructor() {
        super();
        this.navLinks = [
            {
                'Mac':
                    [
                        'MacBook',
                        'MacBook Air',
                        'MacBook Pro',
                        'iMac',
                        'iMac Pro',
                        'Mac Pro',
                        'Mac mini',
                        'Accessories',
                        'High Sierra',
                        'Compare'
                    ]
            },
            {
                'iPad':
                    [
                        'iPad Pro',
                        'iPad',
                        'iPad mini 4',
                        'iOS 11',
                        'Accessories',
                        'Compare'
                    ]
            },
            {
                'iPhone':
                    [
                        'iPhone X',
                        'iPhone 8',
                        'iPhone 7',
                        'iPhone 6s',
                        'iPhone SE',
                        'iOS 11',
                        'Accessories',
                        'Compare'
                    ]
            },
            {
                'Watch':
                    [
                        'Apple Watch Series 3',
                        'Apple Watch Nike+',
                        'Apple Watch Hermes',
                        'Apple Watch Edition',
                        'Apple Watch Series 1',
                        'watchOS',
                        'Bands',
                        'Accessories',
                        'Compare'
                    ]
            },
            {
                'TV':
                    [
                        'Apple TV 4K',
                        'Apple TV',
                        'TV App',
                        'Accessories',
                        'Compare'
                    ]
            },
            {
                'Music':
                    [
                        'Apple Music',
                        'iTunes',
                        'HomePod',
                        'Music Accessories',
                        'Gift Cards'
                    ]
            }
        ];
    }

    render() {
        return (
            <NavWrapperDiv>
                <NavContent>
                    <li>
                        <StyledLink to='/'>Apple</StyledLink>
                    </li>
                    {this.navLinks.map(link => {
                        const category = Object.keys(link)[0];
                        return (
                            <li>
                                <StyledLink to={`/${category}`} activeStyle={{ 'color': 'darkgray' }}>{category}</StyledLink>
                            </li>
                        )
                    })}
                    <li>
                        <StyledLink to='/'>Search</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/'>Cart</StyledLink>
                    </li>
                </NavContent>
            </NavWrapperDiv >
        )
    }
};

export default NavWrapper;