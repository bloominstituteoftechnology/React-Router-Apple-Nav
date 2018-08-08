import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import ColorPanel from './ColorPanel.js';
// import './App.css';

const CanvasStyles = {
    width:'24%',
    height:'200px',
    background:'#fff',
};

class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {
            paintLayers:[]
        }
        console.log("canvas props",props);
        
    }

    pushPaintLayers = (layer) => {

    }

    render(){
        
        
        return <NavLink 
            to={`/${this.props.cnv.id}`}
            onClick={() => this.props.getId(this.props.cnv.id)}
                style={CanvasStyles}
                activeStyle={{
                    border: 'solid 2px white'
                }}>
                
                {
                    this.state.paintLayers.map((panel)=>{
                        return <ColorPanel panel={panel}/>
                    })
                }
                </NavLink>
    }
}

export default Canvas;