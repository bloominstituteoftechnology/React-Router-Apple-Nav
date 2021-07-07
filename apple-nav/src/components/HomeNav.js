import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components'; 
import Chosen from './Chosen';

const navTags = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];

const NavHeader = styled.div`
    display: flex; 
    color: white;
    background: black;
    width: 100%; 
    z-index: 1;
    height: 50px;
    justify-content: center;
    a{
        text-decoration: none;
        color: white;
    }
`;

export const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    margin-left: 250px;
    margin-right: 250px;
    color: white;
    height: 50px;
    margin-bottom: 20px;
    background: black;
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
                    <NavLink to = '/' activeStyle ={{color: 'white'}}><i className="fab fa-apple"></i></NavLink>
                    {navTags.map( (tag, i) => <NavLink key={i} to ={`/${tag.toLowerCase()}`} activeStyle ={{color: 'gray', textDecoration: 'none'}}>{tag}</NavLink>)}
                    <a href="#">Support</a>
                    <i className="fas fa-search"></i>
                    <i className="far fa-clipboard"></i>
                </NavBox>
            </NavHeader>

        );
    }
}

export default HomeNav; 