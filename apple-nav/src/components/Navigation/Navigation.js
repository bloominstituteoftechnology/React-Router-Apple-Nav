import React from 'react';
import { Header, StyledNavBar, NavContent } from '../ReusableComponents/Navigation';
import NavigationItems from './NavigationItems';
import { Route } from 'react-router-dom';
import SubNavigation from './SubNavigation';
class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {
            background: ''
        }
    }

    changeBackground = background => {
        this.setState({ background });
    }

    render() {
        return (
            <React.Fragment>

                <Header style={{ background: this.state.background }}>

                    <StyledNavBar>

                        <NavContent>
                            <NavigationItems changeBackground={this.changeBackground}/>
                        </NavContent>

                    </StyledNavBar>

                </Header>

                <Route path='/:name' render={props => <SubNavigation {...props} changeBackground={this.changeBackground} />} />

            </React.Fragment >
        );
    }
}


export default Navigation;