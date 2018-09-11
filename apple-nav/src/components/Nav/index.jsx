import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => {
  return(
    <div>
      navItem
    </div>
  );
};

// setup the proptype structure first
Nav.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string
  })
};
export default Nav;