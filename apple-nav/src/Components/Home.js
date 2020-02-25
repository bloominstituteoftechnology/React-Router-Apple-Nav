import React from "react";
import Homep from "../images/homep.jpg";
import styled from "styled-components";

const MainContent = styled.div `
    display: flex;
    flex-direction: column;
    justiffy-content: center;
    align-items: center;
    min-height: 1000px;
`;

const Image = styled.img `
    min-width: 100%;
    height: auto;

`;

const Home = () => {
    return (
        <MainContent>
            <Image src={Homep}></Image>
        </MainContent>
    );
};

export default Home;