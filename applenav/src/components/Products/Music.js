import React from "react";
import { Route, Link } from "react-router-dom";
import { music } from "./productdata";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: music
    };
  }

  // componentDidMount = () => this.setState({ products: mac })

  render() {
    return (
      <Route path="/music">
        <div className="products music">
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
      </Route>
    );
  }
}

export default Music;
