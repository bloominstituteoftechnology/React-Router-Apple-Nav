import { Navbar, Nav } from 'reactstrap';
import styled from 'styled-components';

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 3;
    background: white;
`
export const StyledNavBar = styled(Navbar)`
    max-width: 1010px;
    margin: 0 auto;
    padding: 0px 40px;
`