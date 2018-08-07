import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';

const CanvasContainer = styled.div`
    width:200px;
    height:200px;
    border:solid 1px gray;
`;

class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <CanvasContainer>Canvas</CanvasContainer>
    }
}

export default Canvas;