import React from 'react';
import Nav from './nav';
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import '../App.css';

const NavWrapper = () => {
    return ( 
        <div className="navbar-container">
           <Nav />
        </div>        
    );
}
 
export default NavWrapper;