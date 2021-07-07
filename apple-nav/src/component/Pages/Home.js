import React, { Component } from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
  font-size: 20px;
  background-color: #f2f2f2;
`;

const Home = () => {
  return (
    <HomeDiv className="shill lh-solid tc">
      <h1>iPhone X</h1>
      <p>Say hello to the notch.</p>
      <img src="./img/og.png" alt="Top-Notch Phone" />
    </HomeDiv>
  );
}

export default Home;