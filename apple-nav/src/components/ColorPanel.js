import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const ColorPanelStyle = styled.div`
    width:18%;
    height:200px;
    position: fixed;
`;

const ColorPanel = (props) => {
    console.log("props from panel", props);
    
    // let incrZ
    let zNdx = 1000;
    let incrZ = () => {
        zNdx = zNdx + 1;
    }
    
    
    return <ColorPanelStyle style={{ background: props.panel}} ></ColorPanelStyle>
}

export default ColorPanel;