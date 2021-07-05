import React from 'react';
import Nav from './Nav'

const NavWrap = (props) => {    
    return(
        
        <div className = "nav-header">
            <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" alt = "apple logo" />
            <Nav link={props.link} />
            <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" alt = "search" />
            <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" alt = "bag" />                
        </div>
        
        
        
    )    
}

export default NavWrap