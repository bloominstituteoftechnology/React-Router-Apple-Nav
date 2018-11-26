import React from 'react';
import styled, { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Apple from './CustomNavItemComponents/Apple';
import SearchGlass from './CustomNavItemComponents/SearchGlass';
import Bag from './CustomNavItemComponents/Bag';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  margin: 0 auto;
  max-width: 1152px;
  padding: 0 22px;
  position: relative;
  z-index: 2;
  font-size: 1em;
  color: #333;
  display: flex;

  ul {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      margin: 0;
      padding: 0;

      &:hover {
        opacity: 0.65;
      }
    }
  }
`;

const MainNavItemsStyle = {
  fontSize: '14px',
  lineHeight: '3.14286',
  fontWeight: '400',
  letterSpacing: '-.01em',
  fontFamily:
    '"SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
  color: '#fff',
  position: 'relative',
  zIndex: '1',
  display: 'inline-block',
  padding: '0 10px',
  height: '44px',
  opacity: '1',
  background: 'no-repeat',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  webkitTransition: 'opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
  webkitTapHighlightColor: 'transparent',
  outlineOffset: '-7px'
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Nav = props => {
  return (
    <DivWrapper>
      <ul>
        <li>
          <Link to='/'>
            <Apple />
          </Link>
        </li>
        <li>
          <Link to='/mac' style={MainNavItemsStyle}>
            Mac
          </Link>
        </li>
        <li>
          <Link to='/ipad' style={MainNavItemsStyle}>
            iPad
          </Link>
        </li>
        <li>
          <Link to='/iphone' style={MainNavItemsStyle}>
            iPhone
          </Link>
        </li>
        <li>
          <Link to='/watch' style={MainNavItemsStyle}>
            Watch
          </Link>
        </li>
        <li>
          <Link to='/tv' style={MainNavItemsStyle}>
            TV
          </Link>
        </li>
        <li>
          <Link to='/music' style={MainNavItemsStyle}>
            Music
          </Link>
        </li>
        <li>
          <Link to='/Support' style={MainNavItemsStyle}>
            Support
          </Link>
        </li>
        <li>
          <SearchGlass />
        </li>
        <li>
          <Bag />
        </li>
      </ul>
    </DivWrapper>
  );
};

// Nav.propTypes = {
//   propertyName: PropTypes.string
// }

export default Nav;
