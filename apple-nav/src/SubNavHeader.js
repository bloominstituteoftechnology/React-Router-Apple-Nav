import React from "react";

class SubNavHeader extends React.Component {
  render() {
    const category = this.props.categories.find(
      item => item.categoryName === this.props.match.params.categoryName
    );

    if (!this.props.categories.length || !category) {
      return <h2>Loading data...</h2>;
    }

    return (
      <div className="sub-nav-header">
        {category.subcategories.map(sub => (
          <div key={sub.id} className="sub-category">
            <img
              className="sub-image"
              src={sub.subCategoryImage}
              alt={sub.subCategoryName}
            />
            <span className="sub-name">{sub.subCategoryName}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default SubNavHeader;
