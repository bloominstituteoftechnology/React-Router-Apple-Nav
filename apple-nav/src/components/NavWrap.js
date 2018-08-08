import React from 'react';
import Nav from './Nav'
import { Route } from 'react-router-dom';
import SubNav from './SubNav'


const NavWrap = (props) => {
    
    
        return(
            <div>
            <div>
                <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt = "apple logo" />
                <Nav link={props.link} />
                <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt = "search" />
                <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt = "bag" />                
            </div>
            <div>
                <Route path = '/:id' render = {props => <SubNav {...props} link = {props.link} />} />
            </div>
            </div>
            
        )
    
}

export default NavWrap