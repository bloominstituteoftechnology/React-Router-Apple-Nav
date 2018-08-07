import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import styled from 'styled-components'; 

const navTags = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

const NavHeader = styled.div`
    display: flex; 
    position: fixed;
    color: white;
    background: black;
    width: 100%; 
    z-index: 1;
    height: 50px;
    justify-content: center;
`;

const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    margin-left: 250px;
    margin-right: 250px;
`;

class HomeNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        return (
            <NavHeader>
                <NavBox>
                    <i class="fab fa-apple"></i>
                    {navTags.map( tag => <NavLink to ={`/${tag.toLowerCase()}`}>{tag}</NavLink>)}
                    <i class="fas fa-search"></i>
                    <i class="far fa-clipboard"></i>
                </NavBox>
                
            </NavHeader>

        );
    }
}

export default HomeNav; 