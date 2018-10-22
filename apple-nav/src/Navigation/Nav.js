import React from 'react';

const Nav = props => {
  return (
    <div onClick={() => props.selectNav(props.nav)}>
      {props.nav}
    </div>
  );
}

export default Nav;
