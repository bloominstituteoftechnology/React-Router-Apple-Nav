import React from 'react'

const IPad = props => {
    return (
      <div className="subNavDivLight">
        <div className="productDivLight">
          {props.data.map(product => {
            return (
              <div key={product.name}>
                <img src={product.icon} alt={product.name} />
                <p>{product.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default IPad;