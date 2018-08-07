import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
import Canvas from './Canvas.js';
import CanvasData from '../CanvasData.js';

const CanvasWallContainer = styled.div`
    width:900px;
    height:202px;
    display:flex;
    flex-flow: row;
    justify-content:space-between;
`;

class CanvasWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasData: CanvasData,
        }
        console.log(props);
        
    }

    render() {
        return (
            <CanvasWallContainer>
                {
                    this.props.data.map((cnv)=>{
                        return <Canvas getId={this.props.getId} cnv={cnv}/>
                    })
                }
            </CanvasWallContainer>
        )
    }
}

export default CanvasWall;