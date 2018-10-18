import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import appleLogo from '../Assets/apple-logo.png'

/* Styled Components */
const NavBarWrapper = Styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 1024px;
    width: 100%;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    font-size: 17px;
`;
const NavItems = Styled.div`
    margin: 0 auto;
    max-width: 980px;
    width: 100%;
    padding: 0 22px;
    display flex;
    align-items: center;
    justify-content: space between;
`;
const StyledLink = Styled(Link)`
    color: white;
    text-decoration: none;
    padding-right: 100px;
    img {
        width: 20px;
        height: 20px;
    };

    :last-child {
        padding-right: 0px;
    }
`;

/* Menu Items to loop through */
const menuItems = [
    { id: "mac",    name: "Mac"     },
    { id: "ipad",   name: "iPad"    },
    { id: "iphone", name: "iPhone"  },
    { id: "watch",  name: "Watch"   },
    { id: "tv",     name: "TV"      },
    { id: "music",  name: "Music"   },
    { id: "support",name: "Support" }
];

const NavBar = (props) => {
    console.log("menuitems: ", menuItems);
    return (
        <NavBarWrapper>
            <NavItems>
                <StyledLink to="/"><img src={appleLogo} alt='Home'/></StyledLink>
                {menuItems.map( (item, index) => {
                    return (
                        <StyledLink key={index} to={`/${item.id}`}>{item.name}</StyledLink>
                    );
                })}
            </NavItems>
        </NavBarWrapper>
    );
};

export default NavBar;