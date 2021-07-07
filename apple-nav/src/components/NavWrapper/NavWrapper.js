import React from "react";
import Data from "../../Data";
import Nav from "../Nav/Nav";
import "./NavWrapper.css";
import { Link } from "react-router-dom";

class NavWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    };
  }

  render() {
    return (
      <div>
        <div className="NavContainer">
          <img
            className="NavIcons"
            alt="apple logo"
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
          />
          {this.state.data.map(data => (
            <Link data={data} to={`/${data.category}`}>
              {/* key={data.id}
               category={data.category}
               subCategory={data.subCategory} */}
              <Nav
                category={data.category}
                subCategory={data.subCategory}
                id={data.id}
              />
            </Link>
          ))}
          <img
            className="NavIcons"
            alt="search logo"
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
          />
          <img
            className="NavIcons"
            alt="bag logo"
            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
          />
        </div>
      </div>
    );
  }
}

export default NavWrapper;
