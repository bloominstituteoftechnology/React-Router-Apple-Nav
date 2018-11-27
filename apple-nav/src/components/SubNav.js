import React from 'react';
import styled from 'styled-components';

const StyledSubNav = styled.div`
  max-width: 70%;
  padding: 10px;
  //background-color: black;
  color: black;
  display: flex;
  //flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    max-height: 3rem;
    height: auto;
  }
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
