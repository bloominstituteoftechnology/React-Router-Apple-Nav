import React from "react";
import styled from "styled-components";
import Pro13 from "../../images/pro13.jpg";

const Pro13img = styled.img `
    min-width: 100%;
    height: auto;
`;

const Pro13page = () => {
    return (
        <div>
            <Pro13img src={Pro13}></Pro13img>
        </div>
    );
};

export default Pro13page;