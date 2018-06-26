import React from 'react';
import { NavItem } from 'reactstrap';
import { AppleIcon, AppleNames, SearchIcon, ClipBoardIcon, StyledAppleLink, StyledNamesLink } from '../ReusableComponents/Navigation';

const NavNames = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music'];

const NavigationItems = () => {
    return (
        <React.Fragment>

            <StyledAppleLink to='/'>
                    <AppleIcon className="fab fa-apple"></AppleIcon>
            </StyledAppleLink>

            {NavNames.map(name => {
                return <StyledNamesLink key={name} to={`/${name.toLowerCase()}`}>
                    <AppleNames>{name}</AppleNames>
                </StyledNamesLink>
            })}

            <AppleNames>Support</AppleNames>

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