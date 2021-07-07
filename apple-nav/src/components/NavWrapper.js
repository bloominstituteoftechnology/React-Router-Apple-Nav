import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import  Nav from './Nav';


class NavWrapper extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    
    render(){
        return(
            <NavLink exact activeClassName="activeButton" to="/">
            <img src="./images/Apple-Logo.png/" alt="Apple Logo"/>
            </NavLink>
        )
    }

}

export default NavWrapper;