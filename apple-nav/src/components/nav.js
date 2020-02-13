import React,{ Component }from 'react';
import NavItem  from "./navItem";
import { NavLink, Route  } from 'react-router-dom';
import Mac from './mac';
import Ipad from "./ipad";
import Iphone from './iphone';
import Watch from "./watch";
import Tv from './tv';
import Music from "./music";
import Support from './support';
import logo from '../logo.png'
import bag from '../bag.png';
import search from '../search.png';
import { Container, Header, Main, Img,  } from'./style'

class Nav extends Component {
  constructor(props){
    super(props);
    this.keyCount = 0;
  }

  getKey = () =>{
    return this.keyCount++;
  }

  render() {
    return (
      <Main>
        <Container>
          <Header>
          <Img src={logo} alt="logo" size={24} height={24}/>
          {this.props.navlists.map((item) =>{
            return(
              <NavLink exact to={`/${item}/`}>
              <NavItem key={this.getKey()} item={item}/>
              </NavLink>
            ); 
          })}
           <Img src={search} alt="bag" size={18} height={18}/>
           <Img src={bag} alt="bag" size={21} height={21}/>
          </Header>
          <Route exact path='/mac/' render={(props)=> <Mac {...props} macLists={this.props.macLists}/>}/>
          <Route exact path='/ipad/'render={(props)=> <Ipad {...props} ipadLists={this.props.ipadLists}/>}/>
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