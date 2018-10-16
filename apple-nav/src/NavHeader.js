import React from "react";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-header">
        <i className="fab fa-apple" />
        {this.props.categories.map(category => (
          <span key={category.id} className="category">
            {category.categoryName}
          </span>
        ))}
        <span>Support</span>
        <i className="fas fa-search" />
        <i className="fas fa-shopping-bag" />
      </div>
    );
  }
}

export default NavHeader;
