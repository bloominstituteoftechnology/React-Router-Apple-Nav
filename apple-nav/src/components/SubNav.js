import React from 'react';
import { BrowserRouter as Router, Route,  NavLink} from "react-router-dom";

const SubNav = (props) => {
    console.log("appleitmes in subnav", props.appleitems);
    console.log("long thing in SubNav", props.appleitems[props.match.params.id.toLowerCase()])
    return (  
        <div className="subnav-container">
            <ul className="subnavbar">               
                <li className="subnavbartabs">
                    {props.appleitems[props.match.params.id.toLowerCase()].map(item => {
                        console.log("item in map", item)
                        return (
                        <NavLink to={`/`} 
                        activeClassName="activeNavButton">
                        <div className="subnav-link">
                            <img className="subnav-img" src={item.thumbnail} alt="product icon"/>
                            <p className="subnav-name">
                                {item.productName}      
                            </p> 
                        </div>
                    </NavLink>)})
                    }
                </li>               
            </ul>
        </div>        
    );
}
 
export default SubNav;