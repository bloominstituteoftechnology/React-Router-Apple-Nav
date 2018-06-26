import React from 'react';
import { NavItem } from 'reactstrap';
import { AppleIcon, AppleNames, SearchIcon, ClipBoardIcon, StyledAppleLink, StyledNamesLink } from '../ReusableComponents/Navigation';
import AppleIcons from '../../AppleIcons';

const NavigationItems = () => {
    return (
        <React.Fragment>

            <StyledAppleLink to='/'>
                    <AppleIcon className="fab fa-apple"></AppleIcon>
            </StyledAppleLink>

            {AppleIcons.map(name => {
                return <StyledNamesLink key={name.name} to={`/${name.name.toLowerCase()}`}>
                    <AppleNames>{name.name}</AppleNames>
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