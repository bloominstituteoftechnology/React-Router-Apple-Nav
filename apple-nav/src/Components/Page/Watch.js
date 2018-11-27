import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWatch = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Watch = props => {
  return (
    <div>
      <DivWatch>
        <h1>This is the Watch Component</h1>
      </DivWatch>
    </div>
  );
};

// Watch.propTypes = {
//   propertyName: PropTypes.string
// }

export default Watch;
