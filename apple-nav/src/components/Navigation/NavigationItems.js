import React from 'react';
import { NavItem } from 'reactstrap';
import { AppleIcon, AppleNames, SearchIcon, ClipBoardIcon, StyledNavBrand } from '../ReusableComponents/Navigation';
import { Link } from 'react-router-dom';

const NavNames = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music'];

const NavigationItems = () => {
    return (
        <React.Fragment>

            <StyledNavBrand>
                <AppleIcon className="fab fa-apple"></AppleIcon>
            </StyledNavBrand>

            {NavNames.map(name => {
                return <Link key={name} to={`/${name.toLowerCase()}`}>
                    <AppleNames>{name}</AppleNames>
                </Link>
            })}

            <NavItem>
                <AppleNames>Support</AppleNames>
            </NavItem>

            <NavItem>
                <SearchIcon className="fas fa-search"></SearchIcon>
            </NavItem>

            <NavItem>
                <ClipBoardIcon className="far fa-clipboard"></ClipBoardIcon>
            </NavItem>

        </React.Fragment>
    );

}

export default NavigationItems;