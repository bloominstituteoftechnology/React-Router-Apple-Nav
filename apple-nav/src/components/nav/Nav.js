import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (

      <div><Link to={`/nav/${this.props.nav}`}>{this.props.nav}</Link></div>
    )
  }
}

export default Nav;