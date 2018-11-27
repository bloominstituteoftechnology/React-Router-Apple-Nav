import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivHome = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Home = props => {
  return (
    <div>
      <DivHome>
        <h1>This is the Home Component</h1>
      </DivHome>
    </div>
  );
};

// Home.propTypes = {
//   propertyName: PropTypes.string
// }

export default Home;
