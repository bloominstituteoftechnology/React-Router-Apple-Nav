import React from "react";
import data from "../../data";
import "./SubNav.css";

class SubNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="subNav">
        <ul>
          {this.state.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SubNav;
