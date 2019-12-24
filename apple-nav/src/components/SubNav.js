import React from "react";
import "./components.css";
// import NavWrapper from "./NavWrapper";
// import data from "../data";
import Product from "./Product";

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItem: "somet"
    };
  }

  render() {
    return (
      //Output the data.name and link to the correct component.
      <div className="entireNav">
        {/* <NavWrapper /> */}
        <div className="subNav">
          {this.props.data === null
            ? null
            : this.props.data.products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
        </div>
      </div>
    );
  }
}

export default SubNav;
