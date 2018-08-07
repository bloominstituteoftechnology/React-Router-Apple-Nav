import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
// import Canvas from './Canvas.js';

const SwatchContainer = styled.div`
    width:120px;
    height:196px;
`;

class Swatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '',
        }
    }

    componentDidMount(){
        this.setState({
            background: this.props.swatch.background,
        });
    }

    render() {
        return (
            <SwatchContainer style={{background: this.state.background}}>
        
            </SwatchContainer>
        )
    }
}

export default Swatch;