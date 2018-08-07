import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
// import './App.css';
import Swatch from './Swatch.js';
import SwatchData from '../SwatchData.js';
import CanvasData from '../CanvasData.js';

const PaletteContainer = styled.div`
    width:900px;
    height:200px;
    display:flex;
    flex-flow: row;
    justify-content:space-between;
`;

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swatchData: SwatchData,
            activeId: null,
        }
        console.log("palette ",props.match.params);
    }

    componentDidMount(){
        let active =  this.props.match.params.id;
        console.log("active", active);
        this.setState({
            activeId: active,
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState.activeId);
        
        
        console.log("active state", this.props.match.params.id);
        let active = this.props.match.params.id;
        if (active !== prevState.activeId){
            this.setState({
                activeId: active,
            });
        }
    }
     
    render() {
        return (
            <PaletteContainer>
                {
                    this.state.swatchData.map((swatch)=>{
                        return <Swatch key={swatch.color} swatch={swatch} />
                    })
                }
            </PaletteContainer>
        )
    }
}

export default Palette;