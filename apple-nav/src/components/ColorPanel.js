import React, { Component } from 'react';
import styled from 'styled-components';

const ColorPanelStyle = styled.div`
    width:100%;
    height:200px;
    position: fixed;
    transform: skewX(-0deg); 
`;

const ColorPanel = (props) => {
    
    return <ColorPanelStyle style={{ background: props.panel}} ></ColorPanelStyle>
}

export default ColorPanel;