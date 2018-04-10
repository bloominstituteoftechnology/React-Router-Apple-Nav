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
    <Link className="navText-style" to="/support">Support</Link> 
    <Link className="navText-style" to="/search">O-</Link>
    <Link className="navText-style" to="/shoppingbag">BAG</Link>

</div>
/* <div>
<Nav className="nav-styles">
<NavItem>
    <Link to="/">A</Link>
</NavItem>


<Link to="/mac">Mac</Link>


<NavItem>
<Link to="/iphone">IPhone</Link>
</NavItem>

<NavItem>
<Link to="/watch">Watch</Link>
</NavItem>

<NavItem>
<Link to="/tv">TV</Link>
</NavItem>

<NavItem>
<Link to="/music">Music</Link>
</NavItem>

<NavItem>
<Link to="/support">Support</Link>
</NavItem>

<NavItem>
   <Link to="/support">Support</Link> 
</NavItem>

<NavItem>
<Link to="/search">O-</Link>
</NavItem>

<NavItem>
<Link to="/shoppingbag">BAG</Link>
</NavItem>


</Nav>
</div> */

)




}
export default Navigation;