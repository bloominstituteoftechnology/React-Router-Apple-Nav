import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import SubNav from './SubNav';
import { navData } from '../navData';


class NavWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeLink: [],
    }
  }
// const item =  navData.find(thing => `${thing.name}` === props.match.params.name);

  componentDidMount = () => {
    if ((this.props.location.pathname.length > 1)){
      let name = this.props.location.pathname;
      name = name.substring(1);
      let current = navData.find(thing => `${thing.name}` === name);
      let currentArr = [];
      currentArr.push(current);
      this.setState({
        activeLink: currentArr,
      })


    } else{
    }
  }

  selectLink = (event) => {
    let clicked = event.target.innerHTML;
    let links = this.props.links;
    clicked = links.filter(link => (link.name === clicked))
    this.setState({
      activeLink: clicked,
    })
  }

  deselectLink = (link) => {
    this.setState({
      activeLink: '',
    })
  }

  render(){

    return(
      <div className='nav-wrapper'>
        <Route path='/' render={(props) => (<Nav {...props} links={this.props.links} selectLink={this.selectLink} link={this.state.activeLink} deselectLink={this.deselectLink} isActive={this.state.isActive}/>)} />
      {/* <Nav links={this.props.links} selectLink={this.selectLink} link={this.state.activeLink} deselectLink={this.deselectLink}/> */}
      {/* {this.state.isActive && <SubNav link={this.state.activeLink} deselectLink={this.deselectLink}/>} */}
    </div>
    )
  }
}
export default NavWrapper;
