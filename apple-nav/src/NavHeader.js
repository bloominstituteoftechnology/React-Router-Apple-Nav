import React from "react";
import { Link } from "react-router-dom";

class NavHeader extends React.Component {
  render() {
    return (
      <div className="nav-header">
        <i className="fab fa-apple" />
        {this.props.categories.map(category => (
          <Link key={category.id} to={`/${category.categoryName}`}>
            <span className="category">{category.categoryName}</span>
          </Link>
        ))}
        <span>Support</span>
        <i className="fas fa-search" />
        <i className="fas fa-shopping-bag" />
      </div>
    );
  }
}

export default NavHeader;
