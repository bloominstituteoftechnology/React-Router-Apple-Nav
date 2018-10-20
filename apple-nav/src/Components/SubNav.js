import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
 const subNavItems = {
    mac: ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Accessories", "High Sierra", "Compare"], 
    ipad: ["iPad Pro", "iPad", "iPad mini 4", "iOS 11", "Accessories", 'Compare'], 
    iphone: ["iPhone X", "iPhone 8", "iPhone 7", "iPhone 6s", "iPhone SE", "iOS 11", "Compare"], 
    watch: ["Apple Watch Series 3", "Apple Watch Nike+", "Apple Watch Hermes", "Apple Watch Edition", "Apple Watch  Series 1", "watchOS", "Bands", "Accessories", "Compare"], 
    tv: ["Apple TV 4K", "Apple TV", "TV App", "Accessories", "Compare"], 
    music: ["Apple Music", "iTunes", "HomePod", "iPod Touch", "Music Accessories", "Gift Cards"],
    support : ["Support"]
}
 const SubNav = props => {
    const navElement = subNavItems[props.match.params.name]; 
    return (
        <div className =  "sub-navigation">
            {navElement.map((element, index) => <p key = {index} >{element}</p>)}
        </div>
    )
}
 export default SubNav;