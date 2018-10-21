import React, { Component } from 'react';
import styled from 'styled-components';

const SubMenuContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
`

class SubMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SubMenuContainer backgroundColor={this.props.backgroundColor}>
                {this.props.options.map(item => { 
                    return (<img src={item} />)
                })}
            </SubMenuContainer>
        );
    }
}

export default SubMenu;