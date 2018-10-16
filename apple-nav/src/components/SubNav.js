import React from "react";
import "./components.css";
import NavWrapper from "./NavWrapper";
// import data from "../data";

class SubNav extends React.Component {
  constructor() {
    super();
    this.state = {
      navItem: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.name;
    this.setState({ navItem: id });
  }

  render() {
    return (
      <div className="entireNav">
      <NavWrapper />
        <div className="subNav">
          <h2>{this.state.navItem}</h2>
        </div>
      </div>
    );
  }
}

export default SubNav;
