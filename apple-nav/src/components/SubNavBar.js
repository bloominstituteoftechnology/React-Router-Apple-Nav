import React from "react";
import styled from "styled-components";


const SubNavWrapper = styled.div`
  background-color: ${props => props.color};
  height: 100px;
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
const SubLink = styled.div`
  display: inline-block;
  color: ${props => props.color};
  font-size: 11px;
`;

const SubNavBar = props => {
  let linkName = props.match.params.name;
  let dark = (linkName === 'Mac' || linkName === 'TV')
  let color = dark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(242, 242, 242, 0.7)';
  let font = dark ? 'white' : 'rgb(17, 17, 17)';

  return (
    <SubNavWrapper color={color}>
      <SubNav>
        {props.links.length > 0 &&
          props.links
            .find(link => link.name === linkName)
            .subLinks.map(link => <SubLink color={font}>{link.name}</SubLink>)}
      </SubNav>
    </SubNavWrapper>
  );
};

export default SubNavBar;
