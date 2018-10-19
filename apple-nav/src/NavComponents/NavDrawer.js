import React from 'react';
import Styled from 'styled-components';

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

const navExt = [
    { tab: "mac", name: "MacBook" },
    { tab: "mac", name: "MacBook Air" },
    { tab: "mac", name: "MacBook Pro" },
    { tab: "ipad", name: "iPad 1" },
    { tab: "ipad", name: "iPad 2" },
    { tab: "ipad", name: "iPad 3" },
    { tab: "ipad", name: "iPad 4" },
    { tab: "ipad", name: "iPad 5" },
    { tab: "ipad", name: "iPad 6" },
];


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