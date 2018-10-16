import React from "react";

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-header">
        <i class="fab fa-apple" />
        {this.props.categories.map(category => (
          <span className="category">{category.categoryName}</span>
        ))}
        <span>Support</span>
        <i class="fas fa-search" />
        <i class="fas fa-shopping-bag" />
      </div>
    );
  }
}

export default NavHeader;
