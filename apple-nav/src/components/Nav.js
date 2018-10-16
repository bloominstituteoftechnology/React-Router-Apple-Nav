import React from 'react'
import { Wrapper, NavItem } from '../styles/Nav'

const Nav = ({ links }) => (
  <Wrapper>{links.map((link, i) => <NavItem key={i}>{link}</NavItem>)}</Wrapper>
)
export default Nav
