import React from 'react';
import { Route } from 'react-router-dom'; 
import Nav from './Nav';
import SubNav from './SubNav';


class NavWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      activeLink: [],
    }
  }

  selectLink = (event) => {
    console.log('selectLink', event.target.innerHTML)
    let clicked = event.target.innerHTML;
    let links = this.props.links;
    clicked = links.filter(link => (link.name === clicked))
    this.setState({
      isActive: true,
      activeLink: clicked,
    })

  }

  deselectLink = (link) => {
    this.setState({
      isActive: false,
      activeLink: '',
    })
  }

  render(){
    console.log('ActiveLink:', this.state.activeLink)
    return(
      <div className='nav-wrapper'>
        <Route path='/' render={(props) => (<Nav {...props} links={this.props.links} selectLink={this.selectLink} link={this.state.activeLink} deselectLink={this.deselectLink} />)} />
      {/* <Nav links={this.props.links} selectLink={this.selectLink} link={this.state.activeLink} deselectLink={this.deselectLink}/> */}
      {/* {this.state.isActive && <SubNav link={this.state.activeLink} deselectLink={this.deselectLink}/>} */}
    </div>
    )
  }
}
export default NavWrapper;
