import React, { Component } from "react";
import "./SubNavBar.css";
import NavLink from "react-router-dom/NavLink";

class SubNavBar extends Component {
  constructor(props) {
    super(props);
    this.state ={
      currentPage: false
    }
  }

  navbarConstructor = () => {
    if(this.state.currentPage){
      return this.props.items[this.state.currentPage].map((element,index) => {
        return   <NavLink  key={index} activeClassName='subactive' to={`/${this.state.currentPage}/${element}`}> <div key={index} className='subnavbarItem'>{element}</div></NavLink>
    });
    }
    
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    this.setState({
      currentPage: this.props.match.params.id
    })
  }
  componentWillReceiveProps(props) {
    this.setState({ currentPage: props.match.params.id });
}

  render() {
    return <div className="subnavbarContainer">{this.navbarConstructor()}</div>;
  }
}

export default SubNavBar;
