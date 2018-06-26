import React from 'react';
import NavItem from './NavItem';
// import { Route } from 'react-router-dom';
// import Mac from './SubNavComp/Mac';

const Subnav = (props) => {
    return (
        <div>
            <p>Subnav</p>
            {props.data.map(category => {
                return (<NavItem data={category} />)
            })}
        </div>
    )
}
 
export default Subnav;