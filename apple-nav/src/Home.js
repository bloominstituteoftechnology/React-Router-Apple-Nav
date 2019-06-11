import React from "react";
import styled from "styled-components";

const HomePageWrapper = styled.div`
  text-align: center;
  font-size: 4rem;
  margin-top: 80px;
  h2 {
    font-size: 2rem;
    font-weight: normal;
  }
  h1 {
    font-size: 3.3rem;
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
      </HomePageHeading>
    </HomePageWrapper>
  );
};

export default Home;
