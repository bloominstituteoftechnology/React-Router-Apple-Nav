import React, { Component } from 'react';
import styled from 'styled-components';

const SubMenuContainer = styled.div`
    background-color: #141414;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
`

class SubMenu extends React.Component {
    render() {
        return (
            <SubMenuContainer>
                {this.props.options.map(item => { 
                    return (<img src={item}/>)
                })}
            </SubMenuContainer>
        );
    }
}

export default SubMenu;