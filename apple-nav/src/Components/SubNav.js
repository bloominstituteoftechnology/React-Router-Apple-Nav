import React from "react";

const SubNav = props => {
  let category = props.items.filter(
    item => item.category.toLowerCase() === props.match.params.category
  )[0];

  console.log(category);
  const products = category.products;
  console.log(products);

  return (
    <div className={`sub-nav`}>
      {products.map(product => (
        <div className="product-info" key={product.id}>
          <img src={product.imgUrl} />
          <h4>{product.name}</h4>
          <p>{product.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default SubNav;
