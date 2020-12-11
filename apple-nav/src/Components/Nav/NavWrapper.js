import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  display: block;
  margin: 0;
  width: 100%;
  min-width: 1024px;
  height: 44px;
  max-height: 44px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 17px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const NavWrapper = props => {
  return (
    <DivWrapper>
      <Nav {...props} />
    </DivWrapper>
  );
};

// NavWrapper.propTypes = {
//   propertyName: PropTypes.string
// }

export default NavWrapper;
