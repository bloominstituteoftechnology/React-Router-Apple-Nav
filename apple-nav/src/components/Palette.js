import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
import Swatch from './Swatch.js';

const PaletteContainer = styled.div`
    width:900px;
    height:200px;
    border:solid 1px blue;
    display:flex;
    flex-flow: row;
    justify-content:space-between;
`;

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swatches: 7,
        }
    }

    render() {
        return (
            <PaletteContainer>
                <Swatch />
                <Swatch />
                <Swatch />
                <Swatch />
                <Swatch />
                <Swatch />
                <Swatch />
            </PaletteContainer>
        )
    }
}

export default Palette;