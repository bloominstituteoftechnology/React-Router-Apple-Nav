import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DummyPage from './DummyPage';

const SubNavigation = styled.div`
  width: 100%;
  height: 100px;
  background: ${props => props.theme.background};

  & > ul{
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0 auto;

    & > li > a{
      text-decoration: none;
      color: ${props => props.theme.color};
      font-size: 1.4rem;
      font-weight: lighter;
    }
  }
`;

const SubNav = props => {
  const filteredSubNav = props.navs.filter(nav => nav.text === props.match.params.nav);
  const currentSubNav = filteredSubNav[0];
  return(
    <div>
      { currentSubNav.SubNavs.length ?
      <SubNavigation theme={filteredSubNav[0].theme}>
        <ul>
          {currentSubNav.SubNavs.map(nav => <li><Link to={`/${props.match.params.nav}/${nav.text}`}>{nav.text}</Link></li>)}
        </ul>
      </SubNavigation> : null }
      <DummyPage content={currentSubNav.content} />
    </div>
  );
}

export default SubNav;
