import React from 'react'; 
import Nav from './Nav'; 

 const navItems = ["Mac", "Ipad", "Iphone", "Watch", "TV", "Music", "Support" ]

 const NavHeader = props => {
    return(
        <div className = "nav-main">
          {navItems.map((item, index) =>  <Nav key = {index} name = {item} /> )}
        </div>
    )
}

 export default NavHeader;