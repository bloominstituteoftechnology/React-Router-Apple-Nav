import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import SubNav from './SubNav';

const Header = styled.header `
background: black;
opacity: .80;
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
align-items: center;
`

const NavBar = (props) => {
return (
    <React.Fragment>
    <Header>
        <NavLinks list={props.list} handleClick={props.handleClick} />
    </Header>
    
    <Route
    path={'/:category'} 
    render={({match})=> 
        <SubNav {...props} list={props.list} match={match}/>}
    />
    
    </React.Fragment>
)
}
export default NavBar

NavBar.propTypes = {
    list: PropTypes.array
}