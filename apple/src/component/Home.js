import React, { Component } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomeContainer">
      <h1 className="Homeh1">iPhone 7.</h1>
      <h2 className="Homeh2">The futurue is now.</h2>
      {/* <h3 className="Homeh3">Difference in the eye of the beholder</h3> */}
      <div>
        <div>
          <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=470&hei=556&fmt=png-alpha&.v=1472430147951" />
        </div>
      </div>
      <div className="subHomeContainer">
        <div className="textConatiner">
          <h1 className="Homeh3">The world is your oyster;</h1>
          <br></br>
          <h1 className="Homeh4">iPhone is your canvas.</h1>
        </div>
        <img
          className="HomeImage-2"
          src="http://hot97svg.com/wp-content/uploads/2017/12/apple-iphone-6s-plus-review-camera-720x480.jpg"
        />
      </div>
      <div className="footer">
        <h1 className="Homeh5">Shameless Apple Advertisement</h1>
      </div>
    </div>
  );
};

export default Home;
