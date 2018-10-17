import React from "react";
import Categories from "./Categories";

class SubNavHeader extends React.Component {
  render() {
    const category = Categories.find(
      item => item.categoryName === this.props.match.params.categoryName
    );
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
