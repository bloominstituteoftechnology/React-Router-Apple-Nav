import React from 'react';
import Nav from './Nav';

const NavWrapper = (props) => {
    return (
        <nav>
            <Nav page="" text="applepic"/>
            <Nav page="mac" text="Mac"/>
            <Nav page="ipad" text="iPad"/>
            <Nav page="iphone" text="iPhone"/>
            <Nav page="watch" text="Watch"/>
            <Nav page="tv" text="TV"/>
            <Nav page="music" text="Music"/>
            <Nav page="support" text="Support"/>
        </nav>
    )
}

export default NavWrapper;