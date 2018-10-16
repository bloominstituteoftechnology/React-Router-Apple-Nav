import React from 'react'
import { Wrapper, NavItem } from '../styles/Nav'

const Nav = ({ links }) => (
  <Wrapper>
    {links.map((link, i) => (
      <NavItem
        to={`/${link.toLowerCase()}`}
        key={i}
        activeStyle={{ opacity: '.65' }}
      >
        {link}
      </NavItem>
    ))}
  </Wrapper>
)
export default Nav
