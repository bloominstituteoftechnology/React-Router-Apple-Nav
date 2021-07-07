import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopMenuContainer = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333333;
`

const Icon = styled.i`
    color: white;
`

const TopMenuOption = styled.span`
    color: white;
    text-decoration: none;
`

class TopMenu extends React.Component {
  render() {
    return (
      <TopMenuContainer>
        <Link to={`/`}>
            <Icon className="fab fa-apple fa-2x"/>
        </Link>
        <Link to={`/macmenu`}>
            <TopMenuOption>Mac</TopMenuOption>
        </Link>
        <Link to={`/ipadmenu`}>
            <TopMenuOption>iPad</TopMenuOption>
        </Link>
        <Link to={`/iphonemenu`}>
            <TopMenuOption>iPhone</TopMenuOption>
        </Link>
        <TopMenuOption>Watch</TopMenuOption>
        <TopMenuOption>TV</TopMenuOption>
        <TopMenuOption>Music</TopMenuOption>
        <TopMenuOption>Support</TopMenuOption>
        <Icon className="fas fa-search fa-2x"/>
        <Icon className="fas fa-shopping-bag fa-2x"/>
      </TopMenuContainer>
    );
  }
}

export default TopMenu;