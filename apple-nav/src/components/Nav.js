import React from 'react';

const Nav = props => {
    const { id, text } = props;
    return (
      <div>{text}</div>
    );
}

export default Nav;