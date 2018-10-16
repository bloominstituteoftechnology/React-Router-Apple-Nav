import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

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

const RoutesContainer = posed.div({
    enter: {
        x: 0,
        opacity: 1,
        delay: 200,
        ease: 'CircOut'
      },
      exit: {
        x: 50,
        opacity: 0,
        transition: { duration: 0 }
      }
  });

const Subnav = (props) => {
    return (
        <StyledSubnav color={props.color} background={props.background}>
            <PoseGroup>
                <RoutesContainer key={Date.now()}>
                        <StyledContainer width={props.width}>
                            {props.data.map((product,i) => <Product key={i} product={product} />)}
                        </StyledContainer>
                    </RoutesContainer>
                </PoseGroup>
        </StyledSubnav>
    )
}

export default Subnav;