import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.div`
;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    display: block;
    margin: 0;
    max-height: 48px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);

`

const LinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    max-height: 44px;
    margin: 0 auto;
`

const NavigationLinks = styled.div`

    > a {
        color: white;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.4rem;

    }

`


class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mainNav: []
         }
    }

    componentDidMount () {
    fetch ("https://raw.githubusercontent.com/DasGMA/React-Router-Apple-Nav/master/apple-nav/src/main_nav.json")
      .then(response => response.json())
      .then((data) => {
        this.setState ({
          mainNav: data
        })
      })
  }

    
    render() {
        if (!this.state.mainNav) {
            return <div>Loading data....</div>
        }
        return ( 
            <Nav>
                <LinkWrap>
                    <Link to="/" ><img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjVj5TOjNzcAhUPUK0KHVzpAJgQjRx6BAgBEAU&url=http%3A%2F%2Fwww.clker.com%2Fclipart-apple-logo-white-1.html&psig=AOvVaw1OYWAQnaaH9xpqg2Q1Jx0N&ust=1533771061566624" alt="logo"/></Link>
                    {this.state.mainNav.map((link, index) => (
                        <NavigationLinks key={index}>
                            <Link to={`/${link.name}`} >
                            {link.name}
                            </Link>
                        </NavigationLinks>
                    ))}
                </LinkWrap>
                <Nav>
                    <Route
                        
                    />
                </Nav>
            </Nav>
         );
    }
}
 
export default MainNav;