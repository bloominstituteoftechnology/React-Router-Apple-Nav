import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, NavItem } from '../styles/Nav'

const Nav = ({ links }) => (
  <Wrapper>
    {links.map((link, i) => (
      <NavItem
        to={`/${link
          .toLowerCase()
          .split(' ')
          .join('_')}`}
        key={i}
      >
        {link}
      </NavItem>
    ))}
  </Wrapper>
)
export default Nav
