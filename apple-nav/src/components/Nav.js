import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import SubNav from './SubNav';

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #323232;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 985px;
    width: 100%;
    height: 40px;
    margin: 0 auto;
`;

const NavLink = styled.div`
    font-size: 1.6rem;

    a{
        color: white;
        text-decoration: none;

        &:hover{
            color: #797979;
        }
    }
`;

const NavItem = (props)=>{
    return (
        <NavLink>
            <Link to={props.id}>{props.name}</Link>
        </NavLink>
    )
}

const SubNavBar = styled.div`
    display: flex;
    align-items: flex-end;

    ${(props)=>props.path === '/mac' ?  `background-color: #141414` : null}
    ${(props)=>props.path === '/ipad' ?  `background-color: #f6f6f6` : null}
    ${(props)=>props.path === '/iphone' ?  `background-color: #141414` : null}
    ${(props)=>props.path === '/watch' ?  `background-color: #ffffff` : null}
    ${(props)=>props.path === '/tv' ?  `background-color: #141414` : null}
    ${(props)=>props.path === '/music' ?  `background-color: #f6f6f6` : null}
`;

const Nav = (props) =>{
    return (
        <NavContainer>
            <NavBar>
                {props.navData.map((data)=>{
                    return <NavItem key={data.id} id={data.id} name={data.name}/>
                })}
            </NavBar>
            <SubNavBar path={props.location.pathname}>
                {props.navData.map((data)=>{
                    return(
                        <Route key={data.id} path={`/${data.id}`} render={(props)=><SubNav {...props} data={data}/>}/>
                    )
                })}
            </SubNavBar>
        </NavContainer>
    )
}

export default Nav;