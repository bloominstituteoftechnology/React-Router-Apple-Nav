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
            paintLayers:[],
            zIndex: 1000,
        }
        console.log("canvas props",props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("updated props from Canvas",this.props);
        
        // let active = this.props.match.params.id;
        // if (active !== prevState.activeId) {
        //     this.setState({
        //         activeId: active,
        //     });
        // }
    }

    incrZ = () => {
        let z = this.state.zIndex;
        console.log(typeof z);
        
        z=z+1;
        this.setState({
            zIndex: z
        });
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
                    this.props.cnv.panels.map((panel)=>{
                        return <ColorPanel onClick={this.incrZ} incrZ={this.incrZ} zNdx={this.state.zIndex} panel={panel}/>
                    })
                }
                </NavLink>
    }
}

export default Canvas;