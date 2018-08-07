import React from 'react';
import '.././App.css';
import './subnav.css';


    const Subnav =(props)=> {
        return (
            <div className="submenu">
             {props.nav.find(nav => nav.subnav === props.match.params.subnav).navitems.map(navitem => ( <div className="subitem" >{navitem}</div>))} 
            </div>
    )
}

export default Subnav;

// {`${props.nav.subnav}`}