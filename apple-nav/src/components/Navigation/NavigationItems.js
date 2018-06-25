import React from 'react';
import { NavbarBrand, NavItem } from 'reactstrap';
import { AppleIcon, AppleNames, SearchIcon, ClipBoardIcon } from '../ReusableComponents/Navigation';
import { Link } from 'react-router-dom';

const NavNames = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

const NavigationItems = () => {
    return (
        <React.Fragment>

            <NavbarBrand>
                <AppleIcon className="fab fa-apple"></AppleIcon>
            </NavbarBrand>

            {NavNames.map(name => {
                return <Link key={name} to={`/${name.toLowerCase()}`}>
                    <AppleNames>{name}</AppleNames>
                </Link>
            })}

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