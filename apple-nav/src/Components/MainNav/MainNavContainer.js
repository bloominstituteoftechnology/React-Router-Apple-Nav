import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../Data';

const HeaderContainer = styled.div `
  height: 60px;
  width: 100%;
  background-color: #393939;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const NavIcon = styled.i`
  color: white;
  font-size: 1.6rem;  
  :hover {
    color: lightgrey;
  }
`;  

const NavText = styled.p`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-family: "SF Pro Display";  
  :hover {
    color: lightgrey;
  }
  
  
`;

class MainNavContainer extends Component{
  constructor() {
    super();
    this.state= {

    };
  }  
  render() {
    return (
      <HeaderContainer className="main-nav-container">
        <NavContainer className="nav-div">
          <NavIcon to="/" ><i class="fab fa-apple"></i></NavIcon>
          <NavText to="/mac" >Mac</NavText>
          <NavText to="/ipad" >iPad</NavText>
          <NavText to="/iphone" >iPhone</NavText>
          <NavText to="/watch" >Watch</NavText>
          <NavText to="/tv" >TV</NavText>
          <NavText to="/music" >Music</NavText>
          <NavText to="/support" >Support</NavText>
        </NavContainer>       
      </HeaderContainer>
    );
  }
}


export default MainNavContainer;