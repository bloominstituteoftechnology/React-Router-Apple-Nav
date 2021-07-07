import React from "react";
import { Link } from "react-router-dom";
import { iphone } from "./productdata";

class Iphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: iphone
    };
  }

  // componentDidMount = () => this.setState({ products: mac })

  render() {
    return (
      <div className="products iphone">
        {this.state.products.map((item, index) => {
          return (
            <div className="product" key={index}>
              <Link to="/products" className="sub-nav-item">
                <img src={item.svgUrl} alt={item.name} />
                <div>{item.name}</div>
              </Link>
              {item.isNew && <span className="new">New</span>}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Iphone;
