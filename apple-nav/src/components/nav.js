import React,{ Component }from 'react';
import NavItem  from "./navItem";
import { NavLink, Route  } from 'react-router-dom';
import Mac from './mac';
import Ipad from "./ipad";
import Iphone from './iphone';
import Watch from "./watch";
import Tv from './tv';
import Music from "./music";
import styled from 'styled-components';
import Support from './support';
import logo from '../logo.png'


const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;
width:100;
max-width:960px;
border:1px dotted darkgrey;
`;

const Header = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
`

const Main = styled.div`
width:100%;
height:40px
background-color:#000;
`

const Logo = styled.img`
width: 24px;
height: 24px;
position: relative;
top: 5px;
`


class Nav extends Component {
  constructor(props){
    super(props);
    this.keyCount = 0;
  }

  getKey = () =>{
    return this.keyCount++;
  }

  // capitalize = string =>{
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  render() {
    return (
      <Main>
        <Container>
          <Header>
          <Logo src={logo} alt="logo"/>
          {this.props.navlists.map((item) =>{
            return(
              <NavLink exact to={`/${item}/`}>
              <NavItem key={this.getKey()} item={item}/>
              </NavLink>
            ); 
          })}
          </Header>
          <Route exact path='/mac/' component={Mac}/>
          <Route exact path='/ipad/' component={Ipad}/>
          <Route exact path='/iphone/' component={Iphone}/>
          <Route exact path='/watch/' component={Watch}/>
          <Route exact path='/tv/' component={Tv}/>
          <Route exact path='/music/' component={Music}/>
          <Route exact path='/support/' component={Support}/>
        </Container>
      </Main>
    );
  }
}


export default Nav ;