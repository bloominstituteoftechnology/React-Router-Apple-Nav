import React from 'react';
import { NavItem } from 'reactstrap';
import { AppleIcon, AppleNames, SearchIcon, ClipBoardIcon, StyledAppleLink, StyledNamesLink } from '../ReusableComponents/Navigation';
import AppleIcons from '../../AppleIcons';

const NavigationItems = props => {
    return (
        <React.Fragment>

            <StyledAppleLink to='/'>
                <AppleIcon onClick={() => props.changeBackground('rgba(0,0,0,0.8)')} className="fab fa-apple"></AppleIcon>
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