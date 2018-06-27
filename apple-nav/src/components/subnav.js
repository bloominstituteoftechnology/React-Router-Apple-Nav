import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SubNavWrapper = styled.div`
    height: 48px;
    background: #323232;
    color: white;
`
const SubNavContent = styled.ul`
    height: 100%;
    padding: 0;
    margin: 0 5%;
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    letter-spaceing: -0.1em;
    font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`

const Li = styled.li`
    text-decoration: none;
    color: white;
    &:hover{
        color: darkgray;
        cursor: pointer;
    }
` 

class SubNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const catIndex = this.props.navLinks.findIndex((obj) => {
            return Object.keys(obj)[0] === this.props.match.params.category;
        })
        const subNavLinks = this.props.navLinks[catIndex][this.props.match.params.category];
        return (
            <SubNavWrapper>
                <SubNavContent>
                    {subNavLinks.map(subNav => {
                        return (
                            <Li>
                                {/* <StyledLink to={`/${subNav}`}>{subNav}</StyledLink> */}
                                {subNav}           
                            </Li>
                        )
                    })}
                </SubNavContent>
            </SubNavWrapper>
        )
    }
}

export default SubNav;