import React from 'react'

const Watch = props => {
    return (
      <div className="subNavDivLight">
        <div className="productDivWatch">
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


export default Watch;