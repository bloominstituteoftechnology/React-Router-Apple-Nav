import { Navbar, NavbarBrand } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledAppleLink = styled(Link)`
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`

export const StyledNamesLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const StyledNavBrand = styled(NavbarBrand)`
    margin: 0;
`

export const NavContent = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    height: 44px;
    padding: 0;
    margin: 0;
`

export const AppleIcon = styled.i`
    color: white;

    &:hover {
        opacity: .7;
    }
`

export const AppleNames = styled.li`
    color: white;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`

export const SearchIcon = styled.i`
    color: white;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`

export const ClipBoardIcon = styled.i`
    color: white;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`