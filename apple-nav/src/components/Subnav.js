import React from 'react';
import Product from './Product';
import styled from 'styled-components';

let StyledSubnav = styled.div`
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  justify-items: center;
  color: ${props => props.color};
  background: ${props => props.background};
`;

let StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  justify-items: center;
  margin: 0 auto;
  width: ${props => props.width};
`;

const Subnav = (props) => {
    return (
        <StyledSubnav color={props.color} background={props.background}>
            <StyledContainer width={props.width}>
                {props.data.map((product,i) => <Product key={i} product={product} />)}
            </StyledContainer>
        </StyledSubnav>
    )
}

export default Subnav;