import React, { Component } from "react";
// import Data from "../../Data";
import "./SubNav.css";

class SubNav extends Component {
  constructor(props) {
    console.log(props, "props");
    super(props);
    // this.state = {
    //   data: []
    // };
  }

  // componentDidMount() {
  //   this.setState({
  //     data: this.props.data
  //   });
  // }

  render() {
    console.log(this.props.data);
    return (
      <div className="subNavContainer">
        <div className="subNavWrap">
          {this.props.data.map(subCategory => {
            return (
              <div className="itemContainer">
                <img className="icons" src={subCategory.img} alt="logo" />
                <br />
                {subCategory.info}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SubNav;
