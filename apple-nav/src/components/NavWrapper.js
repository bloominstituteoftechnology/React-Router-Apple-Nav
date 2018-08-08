import React from 'react';
import Nav from './nav';
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import '../App.css';


const NavWrapper = (props) => {
    return ( 
        <div className="navbar-container">
           <Nav appleitems={props.appleitems}/>
        </div>        
    );
}
 
export default NavWrapper;