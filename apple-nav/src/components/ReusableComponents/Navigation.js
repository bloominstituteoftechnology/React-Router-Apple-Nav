import { Navbar, Nav } from 'reactstrap';
import styled from 'styled-components';

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 3;
    background: black;
`
export const StyledNavBar = styled(Navbar)`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 22px;
`

export const NavContent = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    padding: 0;
    margin: 0;
`

export const AppleIcon = styled.i`
    color: white;
`

export const AppleNames = styled.li`
    color: white;
    font-size: 14px;
`