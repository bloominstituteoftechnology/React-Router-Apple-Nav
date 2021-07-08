import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

// import FaApple from "../..node_modules/react-icons/lib/fa/apple";

class MainNav extends Component {
    render () { 
        return (
            <div className="MainNav">
              <div className="MainNav__wrapper">
              
                <NavLink to ="/"  className="MainNav__link"> 
                  <img className="link" src="https://image.flaticon.com/icons/svg/179/179309.svg"/>
                </NavLink>
                
                <NavLink to="/mac" className="MainNav__link">
                  Mac 
                </NavLink>
                <NavLink to="/ipad" className="MainNav__link">
                  iPad
                </NavLink>
                <NavLink to="/iphone" className="MainNav__link">
                  iPhone
                </NavLink>
                <NavLink to="/watch" className="MainNav__link">
                  Watch
                </NavLink>
                <NavLink to="/tv" className="MainNav__link">
                  TV
                </NavLink>
                <NavLink to="/music" className="MainNav__link">
                  Music
                </NavLink>
                <NavLink to="/support" className="MainNav__link">
                  Support
                </NavLink>
              
                <NavLink to ="/"  className="MainNav__link">  
                    <img className="link" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"/>
                </NavLink>
             
                <NavLink to ="/"  className="MainNav__link">  
                    <img className="link" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/White_paper_bag.svg/2000px-White_paper_bag.svg.png"/>
                </NavLink>

                </div>
            </div>
        );
    }
}

export default MainNav;