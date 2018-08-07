import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const ColorPanelStyle = styled.div`
    width:100%;
    height:200px;
`;

const ColorPanel = (props) => {
    console.log(props);
    // style={{background: this.props}}
    return <ColorPanelStyle></ColorPanelStyle>
}

export default ColorPanel;