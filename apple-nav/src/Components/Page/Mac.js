import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivMac = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Mac = props => {
  return (
    <div>
      <DivMac>
        <h1>This is the Mac Component</h1>
      </DivMac>
    </div>
  );
};

// Mac.propTypes = {
//   propertyName: PropTypes.string
// }

export default Mac;
