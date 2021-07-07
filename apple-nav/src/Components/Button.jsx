import React from 'react';
import Styled from 'styled-components';

const Button = Styled.div`
    font-size: 2rem;
    padding: ${props => props.theme.shape.smPadding};
    margin: 0px 5px;
    color: ${props => (!props.inverted ? props.theme.color.text : props.theme.color.darkContrast)};
    background-color: ${props =>
    (!props.inverted ? props.theme.color.fg : props.theme.color.lightContrast)};
    border-radius: ${props => (props.rounded ? props.theme.shape.smBorderRadius : null)};

`;

export default () => (
  <Button rounded>
    {'Link'}
  </Button>
);
