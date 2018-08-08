import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const SwatchContainer = styled.div`
    width:120px;
    height:196px;
    transform: skewX(20deg); 
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