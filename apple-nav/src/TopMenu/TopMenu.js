import React, { Component } from 'react';
import styled from 'styled-components'

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
`

class TopMenu extends React.Component {
  render() {
    return (
      <TopMenuContainer>
        <Icon className="fab fa-apple fa-2x"/>
        <TopMenuOption>Mac</TopMenuOption>
        <TopMenuOption>iPad</TopMenuOption>
        <TopMenuOption>iPhone</TopMenuOption>
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