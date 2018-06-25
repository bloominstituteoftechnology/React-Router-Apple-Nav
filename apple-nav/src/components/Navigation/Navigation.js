import React from 'react';
import { NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Header, StyledNavBar, AppleIcon, NavContent, AppleNames } from '../ReusableComponents/Navigation';
import { Link } from 'react-router-dom';

const NavNames = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

const Navigation = () => {
    return (
        <Header>

            <StyledNavBar>

                <NavContent>

                    <NavbarBrand>
                        <AppleIcon className="fab fa-apple"></AppleIcon>
                    </NavbarBrand>

                    {NavNames.map(name => {
                        return <Link key={name} to={`/${name.toLowerCase()}`}>
                            <AppleNames>{name}</AppleNames>
                        </Link>
                    })}


                </NavContent>

            </StyledNavBar>

        </Header>
    );
}


export default Navigation;