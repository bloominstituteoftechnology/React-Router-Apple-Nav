import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
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
            activeId: this.props.match.params.id,
        }
        console.log("palette props", props);
        
    }

    componentDidMount(){
        let active =  this.props.match.params.id;
        this.setState({
            activeId: active,
        });

    }

    componentDidUpdate(prevProps, prevState){
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
                        return <Swatch key={swatch.color} swatch={swatch} canvasId={this.state.activeId} addPanel={this.props.addPanel}/>
                    })
                }
            </PaletteContainer>
        )
    }
}

export default Palette;