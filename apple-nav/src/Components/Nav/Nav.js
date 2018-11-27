import React from 'react';
import styled from 'styled-components';
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

const LinkText = styled(Link)`
  font-size: 14px;
  line-height: 3.14286;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
  color: #fff;
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 10px;
  height: 44px;
  opacity: ${props => (props.isselected === 'true' ? 0.65 : 1)};
  background: no-repeat;
  text-decoration: none;
  white-space: nowrap;
  -webkit-transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-tap-highlight-color: transparent;
  outline-offset: -7px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Nav = props => {
  console.log(props.linkSelected);
  console.log(props.macLink);
  return (
    <DivWrapper>
      <ul>
        <li>
          <Link
            onClick={() => props.selectLink(props.homeLink)}
            to={props.homeLink}
          >
            <Apple />
          </Link>
        </li>
        <li>
          <LinkText
            to={props.macLink}
            onClick={() => props.selectLink(props.macLink)}
            isselected={(props.linkSelected === props.macLink).toString()}
          >
            Mac
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.iPadLink}
            onClick={() => props.selectLink(props.iPadLink)}
            isselected={(props.linkSelected === props.iPadLink).toString()}
          >
            iPad
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.iPhoneLink}
            onClick={() => props.selectLink(props.iPhoneLink)}
            isselected={(props.linkSelected === props.iPhoneLink).toString()}
          >
            iPhone
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.watchLink}
            onClick={() => props.selectLink(props.watchLink)}
            isselected={(props.linkSelected === props.watchLink).toString()}
          >
            Watch
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.tvLink}
            onClick={() => props.selectLink(props.tvLink)}
            isselected={(props.linkSelected === props.tvLink).toString()}
          >
            TV
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.musicLink}
            onClick={() => props.selectLink(props.musicLink)}
            isselected={(props.linkSelected === props.musicLink).toString()}
          >
            Music
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.supportLink}
            onClick={() => props.selectLink(props.supportLink)}
            isselected={(props.linkSelected === props.supportLink).toString()}
          >
            Support
          </LinkText>
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
