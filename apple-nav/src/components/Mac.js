import React from "react";
import macData from "../data/macData";
import "./Mac.css";
const Mac = () => {
  return (
    <div className="apple-product-wrapper">
      <div className="apple-product-container">
        {macData.map(macData => (
          <div>
            <img src={macData.img} alt={macData.name} />
            <h2>{macData.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mac;
