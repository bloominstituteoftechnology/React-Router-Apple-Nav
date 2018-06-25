import React from 'react';
import { NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Header, StyledNavBar } from '../ReusableComponents/Navigation';

const Navigation = () => {
    return (
        <Header>

            <StyledNavBar>

                <NavbarBrand>
                <i class="fab fa-apple"></i>


                    
                </NavbarBrand>

            </StyledNavBar>

        </Header>
    );
}


export default Navigation;