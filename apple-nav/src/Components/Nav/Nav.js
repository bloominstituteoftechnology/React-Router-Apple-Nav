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
  return (
    <DivWrapper>
      <ul>
        <li>
          <Link
            to={props.urlLinks.home}
            onClick={() =>
              props.selectNavItemAndLink(
                props.urlLinks.home,
                props.navItems.apple
              )
            }
          >
            <Apple />
          </Link>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.mac}
            onClick={() =>
              props.selectNavItemAndLink(props.urlLinks.mac, props.navItems.mac)
            }
            isselected={(props.linkSelected === props.urlLinks.mac).toString()}
          >
            Mac
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.iPad}
            onClick={() =>
              props.selectNavItemAndLink(
                props.urlLinks.iPad,
                props.navItems.iPad
              )
            }
            isselected={(props.linkSelected === props.urlLinks.iPad).toString()}
          >
            iPad
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.iPhone}
            onClick={() =>
              props.selectNavItemAndLink(
                props.urlLinks.iPhone,
                props.navItems.iPhone
              )
            }
            isselected={(
              props.linkSelected === props.urlLinks.iPhone
            ).toString()}
          >
            iPhone
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.watch}
            onClick={() =>
              props.selectNavItemAndLink(
                props.urlLinks.watch,
                props.navItems.watch
              )
            }
            isselected={(
              props.linkSelected === props.urlLinks.watch
            ).toString()}
          >
            Watch
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.tv}
            onClick={() =>
              props.selectNavItemAndLink(props.urlLinks.tv, props.navItems.tv)
            }
            isselected={(props.linkSelected === props.urlLinks.tv).toString()}
          >
            TV
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.music}
            onClick={() =>
              props.selectNavItemAndLink(
                props.urlLinks.music,
                props.navItems.music
              )
            }
            isselected={(
              props.linkSelected === props.urlLinks.music
            ).toString()}
          >
            Music
          </LinkText>
        </li>
        <li>
          <LinkText
            to={props.urlLinks.support}
            onClick={() =>
              props.selectNavItemAndLink(
                props.urlLinks.support,
                props.navItems.support
              )
            }
            isselected={(
              props.linkSelected === props.urlLinks.support
            ).toString()}
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
