import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Figure = styled.img`
    height: 54px;
    width: auto;
    margin-bottom: 3px;
`;

const SubNavWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    padding: 0px;
    height: 120px;
    width: 100%;
    background-color: #141414;
`

const SubNavContainer = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 20px 0 10px 0;
    font-size: 11px;
    a {
        text-decoration: none;
        color: white;
    }
`
const LinkHolder = styled.div`
    padding: 0 20px 0 20px;
    text-align: center;
`

const SubNav = (props) => {
    return (
        <SubNavWrapper>
            <SubNavContainer>
        {props.images.map( (obj) => (<LinkHolder><Link to={obj.text} key={obj.text}><Figure src={obj.image}/><div>{obj.text}</div></Link></LinkHolder>))}
            </SubNavContainer>
        </SubNavWrapper>
    );
}

export default SubNav;