import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;
width:100;
max-width:960px;
border:1px dotted darkgrey;
`;

export const Header = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
`

export const Anchor  = styled.a`
 Color:black;
`

export const Main = styled.div`
width:100%;
height:40px
background-color:#000;
`

export const Img = styled.img`
width: props => props.width;
height: props => props.height;
position: relative;
top: 5px;
line-height:15px;
`