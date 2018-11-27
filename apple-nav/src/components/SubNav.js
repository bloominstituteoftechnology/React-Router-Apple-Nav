import React from 'react';
import styled from 'styled-components';

const StyledSubNav = styled.div`
  max-width: 50%;
  padding: 10px;
  background-color: #black;
  color: black;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  & img {
    max-width: 20%;
    height: auto;
  }
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubNav = props => {
  return (
    <StyledSubNav>
      {props.subLinks.map(sub => (
        <SubItem key={sub.name}>
          <img src={sub.img} alt={sub.name} />
          <p>{sub.name}</p>
        </SubItem>
      ))}
    </StyledSubNav>
  );
};

export default SubNav;
