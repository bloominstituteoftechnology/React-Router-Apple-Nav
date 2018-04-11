import React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import{ Link } from 'react-router-dom'
const Navigation = () =>{
return(
<div className="nav-styles">
    <Link className="navText-style" to="/">A</Link>
    <Link className="navText-style" to="/mac">Mac</Link>
    <Link className="navText-style" to="/iphone">IPhone</Link>
    <Link className="navText-style" to="/watch">Watch</Link>
    <Link className="navText-style" to="/tv">TV</Link>
    <Link className="navText-style" to="/music">Music</Link>
    <Link className="navText-style" to="/support">Support</Link>
    <Link className="navText-style" to="/search">O-</Link>
    <Link className="navText-style" to="/shoppingbag">BAG</Link>
</div>
)
}
export default Navigation;