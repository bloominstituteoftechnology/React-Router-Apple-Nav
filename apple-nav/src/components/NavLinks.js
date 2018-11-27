import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import SubLinks from './SubLinks';
import { Route } from "react-router-dom";

export default class HeadLinks extends Component {
  constructor(props){
    super(props);
  }

  render() {console.log(this.props.links)
    return (
      <div className="Links">
        <nav className="headLinks">
        {this.props.links.map((link,index) => (
          <HeadLink key={index} link={link} />
        ))}
        </nav>

        {this.props.links.map((link,index) => (
          <Route
          exact
          path={`/${link.name}`}
          render={props => <SubLinks {...props} link={link} />} />
        ))}
      </div>
    );
  }
};

function HeadLink({link}) {
  const { name } = link;
  return(
    <div>
      <NavLink to={`/${name}`}>{name}</NavLink>
    </div>
  )
}

