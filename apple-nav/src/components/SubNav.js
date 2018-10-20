import React from 'react';
import styled from 'styled-components';

const SubNavContainer = styled.div`
    display: flex;
    margin: 20px auto 10px auto;
    color: white;
    font-size: 1.2rem;
`;

const IconContainer = styled.img`
    padding-bottom: ${props => props.paddingBottom};
    margin: 0 5px;
`;

const SubNav = (props)=>{
    return (
        <SubNavContainer>
            {props.data.imgs.map((img)=>{
                console.log(img.bottomPadding);
                return <IconContainer key={img.imgPath} src={img.imgPath} alt={img.alt} paddingBottom={img.bottomPadding}></IconContainer>
            })}
        </SubNavContainer>
    )
}

export default SubNav;