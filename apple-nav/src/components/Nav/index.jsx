import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => {};

// setup the proptype structure first
Nav.propTypes = {
  link: PropTypes.shape({
    name: string
  })
};
export default Nav;