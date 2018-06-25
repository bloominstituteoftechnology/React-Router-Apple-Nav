import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { AppleIcon, AppleNames } from '../ReusableComponents/Navigation';
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
        </React.Fragment>
    );

}

export default NavigationItems;