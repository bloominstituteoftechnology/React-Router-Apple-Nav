import React from "react";
import styled from 'styled-components';

const SubNavWrapper = styled.div`
  background-color: rgba(242, 242, 242, 0.7);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const SubNav = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 980px;
  max-width: 980px;
`
const SubLink = styled.div`
  display: inline-block;
  color: rgb(17, 17, 17);
  font-size: 11px;
`

const SubNavBar = props => {
  let linkName = props.match.params.name;

  return (
    <SubNavWrapper>
    <SubNav>
      {props.links.length > 0 &&
        props.links
          .find(link => link.name === linkName)
          .subLinks.map(link => <SubLink>{link.name}</SubLink>)}
    </SubNav>
    </SubNavWrapper>
  );
};

export default SubNavBar;
