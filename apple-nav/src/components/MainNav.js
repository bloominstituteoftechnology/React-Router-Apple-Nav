import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import NavigationData from '../main_nav';
import SubNav from './SubNav';


const Nav = styled.div`
;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    display: block;
    margin: 0;
    max-height: 48px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 0 22px;

`

const LinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    max-height: 44px;
    margin: 0 auto;

    > a {
        >img {
            width: 16px;
        }
    }
    
`

const NavigationLinks = styled.div`

    > a {
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        line-height: 3.14286;
        padding: 0 10px;
        white-space: nowrap;
        height: 44px;
    }

`


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            NavigationData: []
         }
    }

    componentDidMount () {
        this.setState ({
            NavigationData
        });
  }

    
    render() {
        if (!this.state.NavigationData) {
            return <div>Loading data....</div>
        }
        return ( 
            <Nav>
                <LinkWrap>
                    <Link to="/" ><img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white-md.png" alt="logo"/></Link>
                    {this.state.NavigationData.map((link, index) => (
                        <NavigationLinks key={index}>
                            <Link to={`/${link.name}`} >
                            {link.name}
                            </Link>
                        </NavigationLinks>
                    ))}
                </LinkWrap>
                
                    <Route
                        path="/:ID"
                        render={(props) => <SubNav {...props} />}
                    />
                
            </Nav>
         );
    }
}
 
export default MainNav;