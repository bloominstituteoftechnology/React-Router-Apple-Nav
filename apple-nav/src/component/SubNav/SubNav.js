import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';

const NavDiv = styled.div`
  width: 100%;
  height: 92px;
  background-color: #141414;
  color: white;
  font-size: 11px;
`;

const SubNav = (props) => {
  const heading = props.headings.filter(heading => {
    return heading.name.replace(/\s/g, '').toLowerCase() === props.match.params.product;
  })[0];
  const { name, subHeadings } = heading;
  console.log("SubNav props: ", props);
  console.log("SubNav heading: ", heading);
  return (
    <NavDiv className="flex justify-around items-center">
      { subHeadings.map(heading=> <Nav key={heading.id} id={heading.id} name={heading.name} icon={heading.icon} />) }
    </NavDiv> 
  );
}

export default SubNav;