import React from "react";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  text-align: center;
  font-size: 4rem;
  padding-top: 50px;
  background-color: #fafafa;
  h2 {
    font-size: 2rem;
    font-weight: normal;
    margin: 10px 0;
  }
  h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  h3 {
    font-size: 1.5rem;
    color: #0070c9;

    font-weight: normal;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  img {
    padding-top: 20px;
  }
`;

const HomePageHeading = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Home = props => {
  return (
    <HomePageWrapper>
      <HomePageHeading>
        <h2>Mac Pro</h2>
        <h1>Power to change everything.</h1>
        <h3>Learn more ></h3>
      </HomePageHeading>
      <img
        src="https://www.apple.com/v/mac/home/ag/images/overview/hero/mac_pro_hero__0h77clf6rv6a_large.jpg"
        alt=""
      />
    </HomePageWrapper>
  );
};

export default Home;
