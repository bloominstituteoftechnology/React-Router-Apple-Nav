import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
import Canvas from './Canvas.js';

const CanvasWallContainer = styled.div`
    width:900px;
    height:202px;
    border:solid 1px red;
    display:flex;
    flex-flow: row;
    justify-content:space-between;
`;

class CanvasWall extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <CanvasWallContainer>
                <Canvas />
                <Canvas />
                <Canvas />
                <Canvas />
            </CanvasWallContainer>
        )
    }
}

export default CanvasWall;