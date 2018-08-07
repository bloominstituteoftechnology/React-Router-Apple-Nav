import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
// import Canvas from './Canvas.js';

const SwatchContainer = styled.div`
    width:120px;
    height:196px;
    border:solid 1px purple;
    ${'' /* display:flex;
    flex-flow: row;
    justify-content:space-between; */}
`;

class Swatch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <SwatchContainer>
               Swatch
            </SwatchContainer>
        )
    }
}

export default Swatch;