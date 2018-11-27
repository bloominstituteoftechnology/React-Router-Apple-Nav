import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivMusic = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Music = props => {
  return (
    <div>
      <DivMusic>
        <h1>This is the Music Component</h1>
      </DivMusic>
    </div>
  );
};

// Music.propTypes = {
//   propertyName: PropTypes.string
// }

export default Music;
