import React from 'react';

import _ from 'lodash';

import Nav from './Nav';

const RouterNav = ({
  linkCollection,
  match: {
    url,
    params: { name }
  }
}) => {
  const tab = _.find(linkCollection, ['name', name]);
  if (!tab) return null;

  return (
    <Nav
      links={tab.subLinks.map(link => ({
        href: `${name}/${link.name}`,
        text: link.name
      }))}
    />
  );
};

export default RouterNav;
