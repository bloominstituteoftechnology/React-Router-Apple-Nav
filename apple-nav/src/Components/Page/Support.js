import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivSupport = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Support = props => {
  return (
    <div>
      <NavWrapper />
      <DivSupport>
        <h1>This is the Support Component</h1>
      </DivSupport>
    </div>
  );
};

// Support.propTypes = {
//   propertyName: PropTypes.string
// }

export default Support;
