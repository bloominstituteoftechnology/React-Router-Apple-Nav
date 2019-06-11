import React from "react";
import styled from "styled-components";
import "./App.css";

const MacLinksFullWidth = styled.div`
  width: 100%;
  background-color: rgba(242, 242, 242, 0.7);
`;

const MacLinksWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  height: 115px;

  text-align: center;
  margin: 0 auto;
  h1 {
    margin: 0;
  }
  img {
    text-align: center;
  }
  p {
    font-size: 0.7rem;
    letter-spacing: -0.008em;
    width: 80px;
    text-align: center;
    margin: 0;
  }
`;

const MacLinks = props => {
  console.log(props);
  return (
    <MacLinksFullWidth>
      <MacLinksWrapper>
        {props.navLinks[0].subLinks.map(link => {
          return (
            <div className={link.id}>
              <img src={link.imgUrl} alt={link.id} />
              <p>{link.name}</p>
            </div>
          );
        })}
      </MacLinksWrapper>
    </MacLinksFullWidth>
  );
};

export default MacLinks;
