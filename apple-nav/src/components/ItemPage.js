import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 52px;
` 
const ItemHeader = styled.div`
  width: 980px;
  max-width: 980px;
  height: 100%;
  border-bottom: 1px solid black;

  p {
    font-size: 24px;
  }
`

const ItemPage = props => {
  let linkName = props.match.params.name;

  return (
    <ItemWrapper>
    <ItemHeader>
      <p>{linkName}</p>
    </ItemHeader>
    </ItemWrapper>
  )
}

export default ItemPage;