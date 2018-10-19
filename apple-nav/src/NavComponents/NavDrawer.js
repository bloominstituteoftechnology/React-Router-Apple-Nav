import React from 'react';
import Styled from 'styled-components';

import navExt from '../Assets/navExt';

const DrawerWrapper = Styled.div`

    background: rgba(2,2,2,0.8);
    min-width: 1024px;
    width: 100%;
    height: 92px;
    color: white;
    padding: 12px 0px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;




const NavDrawer = (props) => {
    const id = props.match.params.id;

    const filteredNav = navExt.filter( (item) => {return (item.tab === id)} );
    console.log("Nav", filteredNav);

    return (
        <DrawerWrapper>
           {filteredNav.map((item) => {
               return (
                   <div>{item.name}</div>
               );
           })} 
        </DrawerWrapper>
    );
};

export default NavDrawer;