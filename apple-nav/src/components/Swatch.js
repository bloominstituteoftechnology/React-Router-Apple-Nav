import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
// import Canvas from './Canvas.js';

const SwatchContainer = styled.div`
    width:120px;
    height:196px;
    &:active{
        box-shadow:0px 0px 17px #fff;
    }     
`;

class Swatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '',
        }
        console.log("swatch props ",props);
        
    }

    componentDidMount(){
        this.setState({
            background: this.props.swatch.background,
        });
    }

    render() {
        return (
            <SwatchContainer 
                onClick={()=>{this.props.addPanel(this.props.canvasId, this.props.swatch.canvas)}}
                style={{background: this.state.background}}>
            </SwatchContainer>
        )
    }
}

export default Swatch;