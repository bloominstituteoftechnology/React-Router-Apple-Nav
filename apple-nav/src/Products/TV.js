import React from 'react'

const TV = props => {
    return (
      <div className="subNavDiv">
        <div className="productDivTV">
          {props.data.map(product => {
            return (
              <div key={product.name}>
                <img className="iPhoneImg" src={product.icon} alt={product.name} />
                <p>{product.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default TV;