import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DummyPage from './DummyPage';

const SubNavigation = styled.div`
  width: 100%;
  height: 100px;
  background: #141414;
  color: white;

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
      color: #FFF;
    }
  }
`;

const SubNav = props => {
  const filteredSubNav = props.navs.filter(nav => nav.text === props.match.params.nav);
  const currentSubNav = filteredSubNav[0];
  return(
    <div>
      <SubNavigation>
        <ul>
          {currentSubNav.SubNavs.map(nav => <li><Link to={`/${props.match.params.nav}/${nav.text}`}>{nav.text}</Link></li>)}
        </ul>
      </SubNavigation>
      <DummyPage content={currentSubNav.content} />
    </div>
  );
}

export default SubNav;
