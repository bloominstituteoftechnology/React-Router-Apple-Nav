import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const SubNavWrapper = styled.div`
  background-color: ${props => props.color};
  height: 95px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SubNav = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 980px;
  max-width: 980px;
`;
const SubLink = styled(Link)`
  display: inline-block;
  color: ${props => props.color};
  font-size: 11px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  p {
    padding-top: 3px;
    margin: 0;
    font-weight: 300;
    
  }
`;

const SubNavBar = props => {
  let linkName = props.match.params.name;
  let dark = (linkName === 'Mac' || linkName === 'TV')
  let color = dark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(242, 242, 242, 0.7)';
  let font = dark ? 'white' : 'rgb(17, 17, 17)';

  return (
    <SubNavWrapper color={color}>
      <SubNav>
        {props.links.length > 0 &&
          props.links
            .find(link => link.name === linkName)
            .subLinks.map(link => <SubLink to={`/${link.name}`} color={font} >{link.img && <img src={link.img} />}<p>{link.name}</p></SubLink>)}
      </SubNav>
    </SubNavWrapper>
  );
};

export default SubNavBar;
