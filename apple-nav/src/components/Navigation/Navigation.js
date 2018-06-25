import React from 'react';
import { Header, StyledNavBar, NavContent } from '../ReusableComponents/Navigation';
import NavigationItems from './NavigationItems';

const Navigation = () => {
    return (
        <Header>

            <StyledNavBar>

                <NavContent>
                    <NavigationItems />
                </NavContent>

            </StyledNavBar>

        </Header>
    );
}


export default Navigation;