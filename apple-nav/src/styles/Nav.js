import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  background: black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const NavItem = styled(NavLink)`
  font-size: 14px;
  color: white;
  margin: 20px 30px;
  text-decoration: none;
`