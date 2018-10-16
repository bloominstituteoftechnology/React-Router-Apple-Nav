import React from "react";
import { Link } from "react-router-dom";
import { mac, iPad, iPhone, watch, tv, music } from "./productdata";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: mac
    };
  }

  // componentDidMount = () => this.setState({ products: mac })

  render() {
    return (
      <div className="products-list">
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

export default Products;
