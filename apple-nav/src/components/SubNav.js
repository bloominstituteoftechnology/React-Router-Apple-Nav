import React from 'react';
import styled from 'styled-components';

const StyledSubNav = styled.div`
  width: 50%;
  color: #FAFAFA;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubNav = props => {
  return (
    <StyledSubNav>
    {props.subLinks.map(sub => (
      <SubItem>
        <img src={sub.img} alt={sub.name} />
        <p>{sub.name}</p>
      </SubItem>
    ))
    }
  </StyledSubNav>
  )
}

export default SubNav;
