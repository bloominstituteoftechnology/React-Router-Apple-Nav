import React from 'react';
import Nav from './nav';
import SubNav from './subnav';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import '../App.css';


const NavWrapper = (props) => {
    console.log(props.appleitems);
    return ( 
        <div className="navbar-container">
           <Nav appleitems={props.appleitems}/>
           <Route path="/:id" render={routeProps =>  <SubNav {...routeProps} appleitems={props.appleitems}/>} />
        </div>        
    );
}
 
export default NavWrapper;