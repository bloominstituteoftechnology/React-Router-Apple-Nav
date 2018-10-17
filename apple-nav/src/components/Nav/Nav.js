import React from "react";
// import SubNav from "../SubNav/SubNav";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category
      //   subCategory: props.subCategory
    };
  }

  // componentDidMount(){
  //     this.setState(
  //         {category: props.category,
  //         subCategory : props.subCategory}
  //     )
  // }

  render() {
    return (
      <div className="InnerWrapper">
        <div className="category">{this.state.category}</div>
        {/* <span>
          {this.state.subCategory.map(subCategory => (
            <SubNav key={Math.random()} subCategory={subCategory} />
          ))}
        </span> */}
      </div>
    );
  }
}

export default Nav;
