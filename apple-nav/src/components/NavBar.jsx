import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const menuItems = [
    { id: "mac",     name: "Mac"     },
    { id: "ipad",    name: "iPad"    },
    { id: "iphone",  name: "iPhone"  },
    { id: "watch",   name: "Watch"   },
    { id: "tv",      name: "TV"      },
    { id: "music",   name: "Music"   },
    { id: "support", name: "Support" }
];

const NavBarContainer = Styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 1024px;
width: 100%;
height: 48px;
background: #000;
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
        width: 40px;
        height: 40px;
    };
    :last-child {
        padding-right: 0px;
    }
`;

const NavBar = () => {
    return(
        <NavBarContainer>
            <NavItems>
                <StyledLink to='/'><img src={require('../Assets/image_large.svg')}/></StyledLink>
                {menuItems.map((item, index) => {
                    return(
                        <StyledLink key={index} to={`/${item.id}`}>{item.name}</StyledLink>
                    )
                })}
            </NavItems>
        </NavBarContainer>
    )
}

export default NavBar;