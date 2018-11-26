import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivIPhone = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const IPhone = props => {
  return (
    <div>
      <NavWrapper />
      <DivIPhone>
        <h1>This is the IPhone Component</h1>
      </DivIPhone>
    </div>
  );
};

// IPhone.propTypes = {
//   propertyName: PropTypes.string
// }

export default IPhone;
